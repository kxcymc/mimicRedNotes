<script setup lang="ts">
import { Search, Close } from '@element-plus/icons-vue';
import { ref } from "vue";
import 'element-plus/theme-chalk/display.css'
import { inject } from "vue";
import useUserStore from '@/store/modules/user';

const userStore = useUserStore();
const searchInput = ref("");
const notToSearch = ref(true);
const getImageUrl = (imageName: string) => {
    // 使用 new URL 动态构建图片路径
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};

interface darkMode {
    isDark: boolean
    toggleDark: () => void
}

const { isDark, toggleDark } = inject('darkMode') as darkMode;
const dark2light = () => {
    toggleDark();
}
</script>

<template>
    <el-row class="head-container" justify="space-between">
        <header class="mask-paper">
            <template v-if="notToSearch">
                <!-- 左侧logo -->
                <router-link to="/">
                    <el-col class="logo" aria-label="仿小红书网站" :span="4">
                        <img :src="getImageUrl('redNotesLogo.png')" alt="小红书的logo" class="red-logo">
                        <span class="sr-only">仿小红书网站</span>
                    </el-col>
                </router-link>
                <!-- 中间搜索框 -->
                <el-col class="search-input-box hidden-xs-only" :span="18" :md="16">
                    <div class="input-box">
                        <input v-model="searchInput" placeholder="搜索小红书" class="search-input">
                        <el-button v-show="searchInput" @click="searchInput = ''" class="clear-input btn-normal-style"
                            size="large" circle plain>
                            <el-icon size="large" :color="isDark ? 'white' : 'initial'">
                                <Close />
                            </el-icon>
                        </el-button>
                        <el-button class="go-to-search btn-normal-style" size="large" circle plain>
                            <el-icon size="large" :color="isDark ? 'white' : 'initial'">
                                <Search />
                            </el-icon>
                        </el-button>
                    </div>
                </el-col>
                <!-- 右边文字 -->
                <el-col class="right hidden-sm-and-down" :span="0" :sm="6">
                    <el-dropdown>
                        <el-button class="right-button btn-normal-style" :class="{ 'dark-mode-item': isDark }"
                            size="large">
                            创作中心
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>创作服务</el-dropdown-item>
                                <el-dropdown-item>直播管理</el-dropdown-item>
                                <el-dropdown-item>电脑直播助手</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-dropdown>
                        <el-button class="right-button btn-normal-style" :class="{ 'dark-mode-item': isDark }"
                            size="large">
                            业务合作
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>专业号</el-dropdown-item>
                                <el-dropdown-item>推广合作</el-dropdown-item>
                                <el-dropdown-item>蒲公英</el-dropdown-item>
                                <el-dropdown-item>商家入驻</el-dropdown-item>
                                <el-dropdown-item>MCN入驻</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>

                <div class="button-area">
                    <!-- 小屏幕的搜索按钮 -->
                    <el-col :span="2" class="hidden-sm-and-up search-button-area">
                        <el-button class="sidebar-button btn-normal-style" @click="notToSearch = false">
                            <el-icon :color="isDark ? 'white' : 'initial'">
                                <Search />
                            </el-icon>
                        </el-button>
                    </el-col>
                    <!-- 小屏幕显示的更多按钮 -->
                    <el-col class="hidden-md-and-up more-button-area" :span="1" :md="0">
                        <el-dropdown trigger="click">
                            <el-button class="sidebar-button btn-normal-style">
                                <el-icon :color="isDark ? 'white' : 'initial'">
                                    <MoreFilled />
                                </el-icon>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>关于小红书</el-dropdown-item>
                                    <el-dropdown-item disabled divided>设置</el-dropdown-item>
                                    <el-dropdown-item @click="dark2light">切换为{{ isDark ? "浅色" : "深色"
                                        }}模式</el-dropdown-item>
                                    <el-dropdown-item v-if="userStore.loginState"
                                        @click="userStore.loginState = false">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </div>
            </template>
            <template v-else>
                <el-col :span="20" class="search-input-box" style="justify-content: flex-start;margin-left: 8px;">
                    <div class="input-box" style="width: 98%;">
                        <input v-model="searchInput" placeholder="搜索小红书" class="search-input">
                        <el-button v-show="searchInput" @click="searchInput = ''" class="clear-input btn-normal-style"
                            size="large" circle plain>
                            <el-icon size="large" :class="{ 'dark-mode-item': isDark }">
                                <Close />
                            </el-icon>
                        </el-button>
                        <el-button class="go-to-search btn-normal-style" size="large" circle plain>
                            <el-icon size="large" :class="{ 'dark-mode-item': isDark }">
                                <Search />
                            </el-icon>
                        </el-button>
                    </div>
                </el-col>
                <el-col :span="4">
                    <el-button @click="notToSearch = true" class="cancel-btn btn-normal-style"
                        :class="{ 'dark-mode-item': isDark }">
                        <span>
                            取消
                        </span>
                    </el-button>
                </el-col>
            </template>
        </header>
    </el-row>
</template>

<style scoped lang='scss'>
.head-container {
    height: 72px;
    width: inherit;
    position: fixed;
    background-color: inherit;

    .btn-normal-style:is(:hover, :active, :focus) {
        border: none;
        outline: none;
    }

    .mask-paper {
        display: flex;
        width: inherit;
        height: inherit;
        align-items: center;
        justify-content: space-between;

        .cancel-btn {
            color: rgb(51, 51, 51);
            font-weight: 400;
            font-size: 16px;
            height: 40px;
            width: 65px;
            margin: 0 5px 0 5px;
            border-radius: 20px;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dark-mode-item {
            color: #fff;
        }

        .dark-mode-item:is(:active, :hover) {
            background-color: rgba(255, 255, 255, 0.04);
        }
    }

    .logo {
        width: 68px;
        max-width: 68px;
        height: 32px;
        margin-left: 20px;
        flex-grow: 0;

        .red-logo {
            object-fit: cover;
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            white-space: nowrap;
        }
    }

    .search-input-box {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .input-box {
            height: 40px;
            width: 400px;
            background-color: #fff;
            display: flex;
            align-items: center;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.03);

            .search-input {
                height: inherit;
                flex-grow: 1;
                width: 100%;
                color: rgb(51, 51, 51);
                caret-color: red;
                margin-left: 20px;
                background-color: rgba(0, 0, 0, 0);
            }

            .clear-input,
            .go-to-search {
                flex-grow: 0;
                border: 0;
                color: rgb(51, 51, 51);
                background-color: rgba(0, 0, 0, 0);
            }

            .clear-input:hover,
            .go-to-search:hover {
                color: initial;
            }

            .dark-mode-item {
                color: #fff;
            }

            .dark-mode-item:is(:active, :hover) {
                background-color: rgba(255, 255, 255, 0.04);
            }

        }
    }


    .right {
        // width: 200px;
        height: 50px;
        // border: 3px solid black;
        flex-grow: 0;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        .right-button {
            margin: 0 5px 0 5px;
            border-radius: 20px;
            font-size: 16px;
            border: 0;
            color: rgba(51, 51, 51, 0.7);
        }

        .right-button:is(:hover, :active) {
            background-color: rgba(0, 0, 0, 0.03);
        }

        .dark-mode-item {
            color: #fff;
        }

        .dark-mode-item:is(:active, :hover) {
            background-color: rgba(255, 255, 255, 0.04);
        }

    }

    .button-area {
        height: 50px;
        flex-grow: 0;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .more-button-area {
            margin-right: 40px;
        }
    }

    .sidebar-button {
        width: 40px;
        height: 40px;
        margin: 0 5px 0 5px;
        border-radius: 20px;
        font-size: 20px;
        border: none;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-normal-style:is(:hover, :active, :focus) {
        border: none;
        outline: none;
    }

    .sidebar-button:is(:hover, :active) {
        background-color: rgba(0, 0, 0, 0.03);
    }

}
</style>