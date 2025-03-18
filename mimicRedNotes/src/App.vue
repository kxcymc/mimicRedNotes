<script setup lang="ts">
import TopHeadBar from "@/components/TopHeadBar.vue"
import SideBar from '@/components/SideBar.vue'
import BottomSideBar from "@/components/BottomSideBar.vue"
import { useMediaQuery } from '@vueuse/core';
import { useDark, useToggle } from '@vueuse/core'
import { provide, } from "vue";
const isSmallScreen = useMediaQuery('(max-width: 992px)');

const isDark = useDark()
const toggleDark = useToggle(isDark)
provide('darkMode', { isDark, toggleDark });
</script>

<template>
    <div class="layout">
        <!-- 顶部主题区域 -->
        <TopHeadBar></TopHeadBar>
        <div class="main-container">
            <!-- 左侧导航栏 -->
            <SideBar v-if="!isSmallScreen"></SideBar>
            <!-- 底部导航栏和左侧互斥 -->
            <BottomSideBar v-else></BottomSideBar>
            <!-- 右侧内容 -->
            <div class="main-content"
                :style="{ 'left': isSmallScreen ? '0' : '248px', 'width': isSmallScreen ? '100%' : 'calc(100% - 248px)', 'height': isSmallScreen ? 'calc(100% - 120px)' : 'calc(100% - 72px)' }">

                <router-view v-slot="{ Component, route }">
                    <transition name="slide-fade">
                        <component :is="Component" :key="route.path" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dark {
    background: rgba(10, 10, 10, 0.98);
    color: #fff !important;
}

.layout {
    width: 100%;
    height: 100vh;

    .main-container {
        height: inherit;
        width: inherit;
        // background-color: rgba(255, 255, 255, 0.98);

        .main-content {
            position: fixed;
            top: 72px;
            background-color: inherit;

            .slide-fade-enter-active {
                transition: all 0.3s ease-out;
            }

            .slide-fade-leave-active {
                transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
            }

            .slide-fade-enter-from,
            .slide-fade-leave-to {
                transform: translateX(20px);
                opacity: 0;
            }
        }
    }
}
</style>