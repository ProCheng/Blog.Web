<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
//console.log(route.meta)
</script>
<template>
    <div class="layout-content">
        <keep-alive v-if="route.meta.keepAlive">
            <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
    </div>
</template>
<style lang="scss" scoped>
.layout-content {
    height: 100%;
    width: 100%;
}
</style>
