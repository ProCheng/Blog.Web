<script setup lang="ts">
import instanceAxios from '@/utils/axios'

async function send() {
    const res = await instanceAxios.get('/api/getUserInfo')
    console.log(res)
}
</script>

<template>
    <div class="container">admin</div>
</template>
<style lang="scss"></style>
