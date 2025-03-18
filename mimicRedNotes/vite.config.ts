import {
  defineConfig,
  type UserConfigExport,
  type ConfigEnv,
  loadEnv,
} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";

// https://vite.dev/config/
const config = ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 用空字符串加载 全部 环境变量
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/pet": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pet/, "/pet"),
        },
      },
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        //指定图标缓存的文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定图标名称格式
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        mockPath: "mock",
        enable: command === "serve",
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${path.resolve(
            __dirname,
            "src/styles/variable.scss"
          )}";`,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },

  };
};

export default defineConfig(config as UserConfigExport);
