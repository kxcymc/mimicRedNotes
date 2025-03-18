<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
const screenToggleMsg = useMediaQuery('(max-width: 660px)');
</script>

<template>
    <div class="user-msg">
        <div class="big-container" v-show="!screenToggleMsg">
            <div class="user-avatar">
                <img class="" src="http://placehold.co/180x180" alt="avatar">
            </div>
            <div class="user-textbox">
                <p class="username">
                    momo
                </p>
                <p class="userid">
                    小红书号：
                </p>
                <p class="sign-text">
                    你好
                </p>
                <p class="tag">
                    广东广州
                </p>
                <p class="like-fan-star">
                    1 关注 1获赞与收藏 1粉丝
                </p>
            </div>
        </div>
        <div class="small-container" v-show="screenToggleMsg">
            <div class="user-info">
                <div class="user-avatar">
                    <img src="http://placehold.co/180x180" alt="avatar">
                </div>
                <div class="user-textbox">
                    <p class="username">
                        momo
                    </p>
                    <p class="userid">
                        小红书号：
                    </p>
                </div>
            </div>
            <p class="sign-text">
                你好
            </p>
            <p class="tag">
                广东广州
            </p>
            <div class="like-fan-star">
                <div class="lfs-box">
                    <span style="padding: 0 25% 0 25%;">1</span><br>
                    <span class="lfs-text">关注</span>
                </div>
                <div class="lfs-box">
                    <span style="padding: 0 25% 0 25%;">1</span><br>
                    <span class="lfs-text">获赞与收藏</span>
                </div>
                <div class="lfs-box">
                    <span style="padding: 0 25% 0 25%;">1</span><br>
                    <span class="lfs-text">粉丝</span>
                </div>
            </div>
        </div>
    </div>
    <div class="user-article">

    </div>
</template>

<style scoped lang='scss'>
.user-msg {
    width: 100%;
    height: 300px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .big-container {
        height: 200px;
        width: 80%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .user-avatar {
            height: 180px;
            width: 180px;
            border-radius: 50%;
            border: 1px solid #000;
            min-width: 64px;
            min-height: 64px;
            object-fit: cover;
            overflow: hidden;
        }

        .user-textbox {
            height: 180px;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }

    .small-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .user-info {
            height: 100px;
            display: flex;
            align-items: center;

            .user-avatar {
                margin: 10px;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                border: 1px solid #000;
                min-width: 64px;
                min-height: 64px;
                object-fit: cover;
                overflow: hidden;
            }

            .user-textbox {
                flex-grow: 1;
                height: fit-content;
            }
        }

        .sign-text,
        .tag {
            margin-left: 10px;
        }

        .like-fan-star {
            height: 70px;
            display: flex;


            .lfs-box {
                height: fit-content;
                width: fit-content;
                margin: 10px;
            }
        }
    }

    .username {
        font-size: 24px;
        font-weight: bold;
    }

    .userid,
    .tag,
    .lfs-text {
        color: rgba(51, 51, 51, 0.6);
    }
}

.user-article {
    width: 100%;
    height: calc(100% - 300px);
    border: 1px solid #000;
}
</style>