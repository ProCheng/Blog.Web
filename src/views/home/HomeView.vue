<script setup lang="ts">
import instanceAxios from '@/utils/axios'

async function send() {
    const res = await instanceAxios.get('/api/getUserInfo')
    console.log(res)
}
</script>

<template>
    <home-header></home-header>
    <home-body style="max-width: 1350px; margin: auto"></home-body>
    <home-footer></home-footer>
</template>
<style scoped></style>
