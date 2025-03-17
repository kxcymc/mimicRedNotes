<script setup lang="ts">
import { ref } from "vue";
const followMe = ref(true);
const Ifollowback = ref(true);
</script>

<template>
    <div class="new-subscriber-box">
        <!-- 左侧头像 -->
        <div class="avatar-box">
            <img class="avatar" src="http://placehold.co/100x120" alt="avatar">
        </div>
        <!-- 右侧内容 -->
        <div class="content-box">
            <div class="top-to-align">
                <!-- 左侧文字 -->
                <div class="left-textarea">
                    <div class="username">momo</div>
                    <div class="message-when">开始关注你了 5 天前</div>
                </div>
                <!-- 右侧按钮 -->
                <div class="right-button">
                    <el-button round v-if="Ifollowback" class="followback-btn"
                        @click="Ifollowback = !Ifollowback">互相关注</el-button>
                    <el-button color="red" round v-else @click="Ifollowback = !Ifollowback">
                        <span v-if="followMe">回关</span>
                        <span v-else>关注</span>
                    </el-button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.new-subscriber-box {
    width: 100%;
    height: 100px;
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

                .username {
                    margin-left: 1%;
                    font-size: 18px;
                    font-weight: 600;
                    width: fit-content;
                }

                .message-when {
                    margin-left: 1%;
                    color: rgba(51, 51, 51, 0.6);
                    font-size: 14px;
                }
            }

            .right-button {
                width: 20%;
                height: inherit;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                .el-button {
                    width: 65%;
                    height: 50%;
                    font-size: 16px;
                }

                .followback-btn:is(:hover, :active, :focus) {
                    background-color: rgba(0, 0, 0, 0.08);
                    border-color: rgba(0, 0, 0, 0.08);
                    color: black;
                }
            }
        }
    }
}
</style>