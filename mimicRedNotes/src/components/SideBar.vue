<script setup lang="ts">
import useUserStore from '@/store/modules/user';
import { inject } from "vue";

interface darkMode {
    isDark: boolean
    toggleDark: () => void
}

const userStore = useUserStore();
const { isDark, toggleDark } = inject('darkMode') as darkMode;
const dark2light = () => {
    toggleDark();
}
</script>

<template>
    <div class="side-bar">
        <el-menu :active-text-color="isDark ? '#fff' : '#000'" style="border:none;">
            <router-link to="/">
                <el-menu-item index="/explore" :class="{ 'dark-mode-item': isDark }">
                    <template #title>
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>发现</span>
                    </template>
                </el-menu-item>
            </router-link>
            <a href="https://github.com">
                <el-menu-item index="toPublish" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span>发布</span>
                </el-menu-item>
            </a>
            <router-link to="/notification">
                <el-menu-item index="/notification" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <Bell />
                    </el-icon>
                    <span>通知</span>
                </el-menu-item>
            </router-link>
            <el-menu-item @click="userStore.loginState = true" class="login-btn" v-show="!userStore.loginState">
                登录
            </el-menu-item>
            <router-link to="/user/profile" v-show="userStore.loginState">
                <el-menu-item index="/user/profile" :class="{ 'dark-mode-item': isDark }">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>我</span>
                </el-menu-item>
            </router-link>
        </el-menu>
        <el-dropdown trigger="click">
            <el-button class="sidebar-button btn-normal-style" :class="{ 'dark-mode-item': isDark }">
                <el-icon :color="isDark ? 'white' : 'black'">
                    <MoreFilled />
                </el-icon>
                <span :style="{ color: isDark ? 'white' : 'black' }">
                    更多
                </span>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>关于小红书</el-dropdown-item>
                    <el-dropdown-item disabled divided>设置</el-dropdown-item>
                    <el-dropdown-item @click="dark2light">切换为{{ isDark ? "浅色" : "深色" }}模式</el-dropdown-item>
                    <el-dropdown-item @click="userStore.loginState = false"
                        v-if="userStore.loginState">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped lang='scss'>
.side-bar {
    position: fixed;
    top: 72px;
    width: 248px;
    height: calc(100% - 72px);
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .el-menu-item {
        border-radius: 10vh;
        font-size: 18px;
        margin: 10px;
        font-weight: 500;
    }

    .el-icon {
        font-size: 24px;
        font-weight: 900;
        margin-right: 15px;
    }

    .el-menu-item:is(:hover, :active) {
        background-color: rgba(0, 0, 0, 0.06);
    }

    .sidebar-button {
        width: 100%;
        height: 56px;
        margin: 0 5px 0 5px;
        border-radius: 10vh;
        font-size: 16px;
        border: 0;
        color: black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .btn-normal-style:is(:hover, :active, :focus) {
        border: none;
        outline: none;
    }

    .sidebar-button:is(:hover, :active) {
        background-color: rgba(0, 0, 0, 0.03);
    }

    .dark-mode-item:is(:active, :hover) {
        background-color: rgba(255, 255, 255, 0.04);
    }

    .login-btn {
        background-color: #ff2e4d;
        color: #fff;
        display: grid;
        place-items: center;
    }

    .login-btn:is(:hover, :active, :focus) {
        background-color: #ff2e4d;
    }
}
</style>