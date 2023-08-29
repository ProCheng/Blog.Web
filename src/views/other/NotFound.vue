<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

let goBackOrHome = () => {
    if (window.history.state.position > 1) {
        router.go(-1) // 返回上一个页面
    } else {
        router.push({ path: '/' }) // 跳转到首页
    }
}
</script>

<template>
    <div class="container" @click="goBackOrHome">
        <h1>404</h1>
        <button>返回上一页</button>
    </div>
</template>
<style lang="scss"></style>
