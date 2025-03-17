<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { useRoute } from 'vue-router'
import { inject } from "vue";
const isXsScreen = useMediaQuery('(max-width: 768px)');
// 获取页面当前路由
const nowRoute = useRoute();

interface darkMode {
    isDark: boolean
    toggleDark: () => void
}

const { isDark } = inject('darkMode') as darkMode;
</script>

<template>
    <div class="bottom-sidebar">
        <el-menu class="set-style-bottom-bar" :class="{ 'dark-mode-bgc': isDark }" mode="horizontal"
            :default-active="nowRoute.path">
            <router-link to="/">
                <el-menu-item index="/explore" :class="{ 'dark-mode-item': isDark }">
                    <template #title>
                        <el-icon>
                            <House />
                        </el-icon>
                        <span v-show="!isXsScreen">发现</span>
                    </template>
                </el-menu-item>
            </router-link>
            <a href="https://github.com">
                <el-menu-item index="toPublish" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span v-show="!isXsScreen">发布</span>
                </el-menu-item>
            </a>
            <router-link to="/notification">
                <el-menu-item index="/notification" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <Bell />
                    </el-icon>
                    <span v-show="!isXsScreen">通知</span>
                </el-menu-item>
            </router-link>
            <router-link to="/user/profile">
                <el-menu-item index="/user/profile" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span v-show="!isXsScreen">我</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<style scoped lang='scss'>
.bottom-sidebar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: #fff;
    z-index: 10;

    .set-style-bottom-bar {
        width: 100%;
        height: inherit;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .el-menu-item {
            width: 100%;
            height: inherit;
            color: rgba(51, 51, 51, 0.7);
            font-size: 18px;
        }

        .el-icon {
            font-size: 24px;
            font-weight: 500;
            margin-right: 15px;
        }

        .el-menu-item:is(:hover, :active, :focus) {
            background-color: rgba(0, 0, 0, 0);
            color: #000;
        }

        .is-active {
            background-color: rgba(0, 0, 0, 0);
            color: #000;
        }

        .dark-mode-item {
            color: white;
        }

        .dark-mode-item:is(:active, :hover, :focus) {
            color: white;
        }
    }

    .dark-mode-bgc {
        background-color: rgba(10, 10, 10, 0.98);
    }
}
</style>