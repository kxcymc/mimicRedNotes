<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { NCard, NTag, NButton, NInfiniteScroll, NScrollbar, NConfigProvider } from 'naive-ui';

const pets = ref([]);
const channels = {
    homefeed_recommend: { label: '推荐' },
    homefeed_dressing: { label: '穿搭' },
    homefeed_food: { label: '美食' },
    homefeed_makeup: { label: '彩妆' },
    homefeed_movie: { label: '影视' },
    homefeed_work: { label: '职场' },
    homefeed_emotion: { label: '情感' },
    homefeed_home: { label: '家居' },
    homefeed_game: { label: '游戏' },
    homefeed_travel: { label: '旅行' },
    homefeed_fitness: { label: '健身' }
};

// 当前激活的频道
const activeChannel = computed(() => route.query.channel_id || 'homefeed_recommend');

const route = useRoute();
const router = useRouter();

const setActive = (key) => {
    activeChannel.value = key;
    router.push({ path: '/explore', query: { channel_id: key } });
};

// 监听 URL 变化
// 为了与小红书对齐，不设置immediate
watch(() => route.query.channel_id, (newChannel) => {
    if (!newChannel || !channels[newChannel]) {
        router.replace({ path: '/explore', query: { channel_id: 'homefeed_recommend' } });
    }
});

const search = (keyword = '') => {
    axios({
        method: 'post',
        url: '/pet/search',
        params: { keyword },
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }).then((response) => {
        pets.value.push(...response.data.data);
    });
};

const handleLoad = async () => {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    search();
}

onMounted(() => {
    search('');
});


</script>

<template>
    <n-config-provider :theme-overrides="{
        Scrollbar: {
            height: '0', // 隐藏横向滚动条
            //width: '0'   隐藏竖向滚动条
        },
    }">
        <n-scrollbar x-scrollable class="channel-container">
            <div class="channel-box">
                <el-button v-for="(item, key) in channels" :key="key" class="channel-item"
                    :class="{ active: activeChannel === key }" @click="setActive(key)">
                    <span>{{ item.label }}</span>
                </el-button>
            </div>
        </n-scrollbar>
    </n-config-provider>
    <div class="waterfall">
        <n-infinite-scroll :distance="300" @load="handleLoad" style="width:100%;height: 100%;">
            <div v-masonry fit-width="true" transition-duration="0.3s" item-selector=".card" origin-left="true"
                origin-top="true" class="pets" column-width="20">
                <div v-masonry-tile v-for="pet in pets" :key="pet['code']" class="card">
                    <n-card>
                        <p>
                            <n-tag style="margin:2px;" type="info">{{ pet["type"] }}</n-tag>
                            <n-tag style="margin:2px;" type="info">{{ pet["kind"] }}</n-tag>
                            <n-tag> {{ pet['name'] }} </n-tag>
                        </p>
                        <template #cover>
                            <img :src="pet['pic']">
                        </template>
                        <p>
                            {{ pet['name'] }},出生于{{ pet['birth'] }},
                            {{
                                pet['gender'] === 0 ? "雌" : pet['gender'] === 1 ? "雄" : pet['gender'] === 2 ? "雌雄共体" :
                                    "未知"
                            }},性格{{ pet['disposition'] }},目前健康状态为{{ pet['health'] }}。
                            目前 <n-tag type="success">{{
                                pet['state'] === 0 ? "未被领养" : "已被领养"
                            }}</n-tag>
                        </p>
                        <p style="text-align:right;">
                            <n-button type="primary" v-if="pet['state'] === 0 ? true : false">
                                我要领养
                            </n-button>
                        </p>
                    </n-card>
                </div>
            </div>
        </n-infinite-scroll>
    </div>
</template>

<style>
.channel-container {
    width: 100%;
    height: 10%;
    margin-left: 1vw;

    .channel-box {
        padding-top: 1vh;
        width: inherit;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: flex-start;


        .channel-item {
            width: 65px;
            height: 40px;
            margin: 0;
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

}

.waterfall {
    width: 100%;
    height: 90%;

    .n-scrollbar-rail {
        display: none;
    }

    .pets {
        width: 80%;
        margin: 0 auto;
    }

    .card {
        width: 100%;
        max-width: 250px;
        margin: 1vh;
        border-radius: 5px;
        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);

        img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
    }
}
</style>