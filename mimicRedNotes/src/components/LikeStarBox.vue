<script setup lang="ts">
</script>

<template>
    <div class="like-star-box">
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
                        <div class="username">momo</div>
                        <div class="yourfan">你的粉丝</div>
                    </div>
                    <div class="message-when">赞了你的评论 5 天前</div>
                    <div class="reply">
                        <div class="reply-text">myselfxx1: 一直会开吗 还是偶尔才会开放呀</div>
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
.like-star-box {
    width: 100%;
    height: 120px;
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
                    margin-left: 1%;
                    display: flex;
                    justify-content: flex-start;

                    .username {
                        font-size: 18px;
                        font-weight: 600;
                        width: fit-content;
                    }

                    .yourfan {
                        padding: 3px 4px;
                        margin-left: 4px;
                        background-color: rgba(0, 0, 0, 0.03);
                        border-radius: 4px;
                        font-size: 16px;
                        color: rgba(51, 51, 51, 0.6);
                        font-weight: 400;
                    }
                }

                .message-when {
                    margin-left: 1%;
                    color: rgba(51, 51, 51, 0.6);
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