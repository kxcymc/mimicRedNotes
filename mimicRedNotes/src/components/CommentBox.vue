<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NIcon } from 'naive-ui';
import { ChatbubbleOutline, HeartOutline, Heart } from '@vicons/ionicons5'
const likeIt = ref(false);
const LikeHeart = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('button') as HTMLButtonElement | null;
    if (btn) btn.blur();
    likeIt.value = !likeIt.value
}
</script>

<template>
    <div class="comment-mention-box">
        <!-- 左侧头像 -->
        <div class="avatar-box">
            <img class="avatar" src="http://placehold.co/100x120" alt="avatar">
        </div>
        <!-- 右侧内容 -->
        <div class="content-box">
            <div class="top-to-align">
                <!-- 左侧文字 -->
                <div class="left-textarea">
                    <div class="user">
                        momo
                    </div>
                    <div class="message-when">评论了你的笔记 5 天前</div>
                    <p class="comment-text">一直</p>
                    <div class="reply">
                        <div class="reply-text">myselfxx1: 一直会开吗 还是偶尔才会开放呀</div>
                    </div>
                    <div class="actions">
                        <n-button quaternary size="large" round @click="(e) => e.target?.closest('button').blur()">
                            <template #icon>
                                <n-icon size="32">
                                    <ChatbubbleOutline />
                                </n-icon>
                            </template>
                            <span>评论</span>
                        </n-button>
                        <n-button quaternary size="large" circle @click="LikeHeart" :color="likeIt ? 'red' : undefined">
                            <template #icon>
                                <n-icon size="32" :component="HeartOutline" v-show="!likeIt" />
                                <n-icon size="32" :component="Heart" v-show="likeIt" />
                            </template>
                        </n-button>
                    </div>
                </div>
                <!-- 右侧图片 -->
                <div class="right-img">
                    <div class="article-box">
                        <img class="article-preimg" src="http://placehold.co/100x120" alt="article">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.comment-mention-box {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;

    .avatar-box {
        position: relative;
        width: 10%;
        height: inherit;

        .avatar {
            position: absolute;
            top: 8%;
            left: calc((100% - 64px)/2);
            min-width: 64px;
            min-height: 64px;
            object-fit: cover;
            overflow: hidden;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 1px solid #000;
        }
    }

    .content-box {
        width: calc(88% - 1.25vw);
        margin-left: 2%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        height: inherit;
        position: relative;

        .top-to-align {
            position: absolute;
            top: 8%;
            width: 100%;
            height: 92%;
            display: flex;

            .left-textarea {
                width: 80%;

                .user {
                    font-size: 18px;
                    font-weight: 600;
                    margin-left: 1%;
                }

                .message-when {
                    margin-left: 1%;
                    color: rgba(51, 51, 51, 0.6);
                    font-size: 14px;
                }

                .comment-text {
                    margin: 1% 0 2% 1%;
                    font-size: 14px;
                }



                .reply {
                    position: relative;
                    margin: 2% 0 2% 1%;
                    font-size: 14px;
                    color: rgba(51, 51, 51, 0.8);
                    white-space: nowrap;

                    .reply-text {
                        margin-left: 2%;
                        white-space: nowrap;
                        position: relative;
                    }

                }

                .reply::before {
                    content: '';
                    display: inline-block;
                    border-radius: 8px;
                    margin-right: 4px;
                    width: 4px;
                    height: 18px;
                    background: rgba(0, 0, 0, 0.08);
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }

                .actions {
                    display: flex;
                    height: 60px;
                    width: 160px;
                    margin-left: 1%;
                    justify-content: space-between;
                    align-items: center;

                    .n-button {
                        border: 1px solid rgba(0, 0, 0, 0.08);

                    }

                    .n-button:is(:focus, :active) {
                        outline: none;
                    }
                }
            }

            .right-img {
                width: 20%;
                height: inherit;
                position: relative;

                .article-box {
                    position: absolute;
                    top: 10%;
                    right: 10%;
                    width: 48px;
                    height: 48px;
                    border: 1px solid #000;
                    border-radius: 10%;

                    .article-preimg {
                        width: 48px;
                        height: 48px;
                        object-fit: cover;
                        overflow: hidden;
                    }
                }
            }
        }

    }


}
</style>