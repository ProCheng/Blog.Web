<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGlobal } from '@/stores/global'
import { ref } from 'vue'
import { ElScrollbar } from 'element-plus'

const globalStore = useGlobal()
const innerRef = ref<HTMLDivElement>()
const scrollRef = ref<InstanceType<typeof ElScrollbar>>()

// 更新滚动条滚动距离
const scrollChange = (scroll: { scrollLeft: number; scrollTop: number }) => {
    globalStore.setScrollTop(
        // 计算滚动条百分比
        Math.ceil((scroll.scrollTop / (innerRef.value!.clientHeight - scrollRef.value!.wrapRef!.clientHeight)) * 100)
    )
}
const route = useRoute()
//console.log(route.meta)
</script>
<template>
    <el-scrollbar @scroll="scrollChange" ref="scrollRef" class="layout-content" height="100%">
        <div ref="innerRef" style="height: 100%">
            <keep-alive v-if="route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </div>
    </el-scrollbar>
</template>
<style lang="scss" scoped>
.layout-content {
    height: 100%;
    width: 100%;
    background-color: #f7f9fe;
    :deep(.el-scrollbar__thumb) {
        background: #515151;
        &:hover,
        &:active {
            background: #1601ff;
        }
    }
}
</style>
