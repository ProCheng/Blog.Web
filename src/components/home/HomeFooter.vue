<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="container">
        <div>©2023 - 2023 By 每日一记</div>
        <ul class="link_group">
            <li class="link_item">订阅</li>

            <li class="link_item">
                <a
                    target="_blank"
                    style="display: flex; align-items: center"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602002450"
                >
                    <el-image src="/src/assets/beian.png" fit="cover" style="width: 15px; height: 15px" />
                    <span> 粤公网安备 44060602002450号 </span></a
                >
            </li>
            <li class="link_item">
                <a target="_blank" href="https://beian.miit.gov.cn/">湘ICP备2023001478号</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 90px;
    margin-top: 100px;
    height: 80px;
    background-color: #e8e8eb;
    font-weight: 600;
    font-size: 14px;
    .link_group {
        display: flex;
        flex-wrap: wrap;

        .link_item {
            cursor: pointer;
            margin-right: 20px;
        }
    }
}
</style>
