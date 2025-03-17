<script setup lang="ts">
import { ref } from 'vue';
import CommentMention from '@/views/CommentMention.vue';
import LikeStar from '@/views/LikeStar.vue';
import NewSubscriber from '@/views/NewSubscriber.vue';
import { useMediaQuery } from '@vueuse/core';
const isXMScreen = useMediaQuery('(max-width: 1200px)');
const channels = ['评论和@', '赞和收藏', '新增关注']
const activeIndex = ref(0);
import { NScrollbar, NConfigProvider } from 'naive-ui';
</script>

<template>
    <div :style="{ padding: isXMScreen ? '' : '0 100px', height: '100%' }">
        <div class="channel-container">
            <el-button class="channel-item" :class="{ active: activeIndex === index }" v-for="(item, index) in channels"
                :key="index" @click="activeIndex = index">
                <span>{{ item }}</span>
            </el-button>
        </div>
        <div class="line-divider"></div>
        <div class="card-fall">
            <n-config-provider :theme-overrides="{
                Scrollbar: {
                    width: '0',
                },
            }" style="height: 100%;">
                <n-scrollbar>
                    <CommentMention v-show="activeIndex === 0"></CommentMention>
                    <LikeStar v-show="activeIndex === 1"></LikeStar>
                    <NewSubscriber v-show="activeIndex === 2"></NewSubscriber>
                </n-scrollbar>
            </n-config-provider>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.channel-container {
    width: 100%;
    height: 10%;
    margin: 1vw 0 0.75vw 0.75vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .channel-item {
        width: 95px;
        height: 40px;
        margin: 0;
        padding: 0 16px;
        border-radius: 20px;
        font-size: 16px;
        border: 0;
        font-weight: 400;
        color: rgba(51, 51, 51, 0.7);
        transition: all 0.3s ease-in-out;
    }

    .channel-item:is(:hover, :active, :focus) {
        border: none;
        outline: none;
    }

    .channel-item:is(:hover, :active) {
        background-color: rgba(0, 0, 0, 0.03);
        color: black;
    }

    .active {
        background-color: rgba(0, 0, 0, 0.03);
        font-weight: bold;
        color: black;
    }

}

.line-divider {
    list-style: none;
    height: 0;
    border-style: solid;
    border-width: 1px 0 0;
    border-color: rgba(0, 0, 0, 0.08);
    width: 98%;
}

.card-fall {
    width: 100%;
    height: 90%;
}
</style>