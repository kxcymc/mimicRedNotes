<script setup lang="ts">
// 处理数据项大于100条的情况
import { ref } from 'vue';
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

// 定义列表项类型
interface ListItem {
  id: number;
  name: string;
}

// 生成不同高度的列表项
const list = ref<ListItem[]>(Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `用户 ${i + 1}${'琳临林'.repeat(Math.floor(Math.random() * 50))}` // 让文本长度不同，测试动态高度
})));
</script>
<template>
  <DynamicScroller
    class="scroller"
    :items="list"
    :min-item-size="50"
    key-field="id"
    v-slot="{ item, index, active }"
  >
    <DynamicScrollerItem
      :item="item"
      :active="active"
      :size-dependencies="[item.name]"
      :data-index="index"
    >
      <div class="user">
        <span>{{ item.name }}</span>
      </div>
    </DynamicScrollerItem>
  </DynamicScroller>
</template>

<style scoped>
.scroller {
  height: 400px; /* 确保外部容器有固定高度 */
  border: 1px solid #000;
  overflow-y: auto;
}

.user {
  padding: 10px;
  /* background: #f5f5f5; */
  border: 1px solid #000;
  margin-bottom: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}
</style>
