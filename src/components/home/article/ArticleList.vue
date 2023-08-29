<script setup lang="ts">
defineProps<{
    list: Array<any>
}>()
</script>

<template>
    <el-card class="container">
        <div v-for="i in 6" :key="i" class="item">
            <span class="title">长连接与短连接</span>
            <div class="item_text">
                <el-image src="https://cdn.jnpfsoft.com/2022/img/index/head_center_right.gif" fit="cover" />
                <span>
                    AngleSharp简单介绍 AngleSharp 是一个 .NET 库
                    使您能够解析基于尖括号的超文本，如HTML、SVG、MathML、XML AngleSharp的一个重要方面是CSS也可以解析。
                    同时还是开源，免费的 Github: https://github.com/AngleSh同时还是开源，免费的 Github:
                    https://github.com/AngleSh同时还是开源，免费的 Github:
                </span>
            </div>
            <div class="item_info">
                <span>管理员</span>
                <span>2022-09-07 09:01</span>
                <span>
                    <el-icon color="#ccc"><i-ep-ChatLineRound /></el-icon>
                    <span>2</span>
                </span>
                <span>
                    <el-icon color="#ccc"><i-ep-View /></el-icon>
                    <span>10</span>
                </span>
            </div>
            <el-divider border-style="dashed" />
        </div>
    </el-card>
</template>

<style scoped lang="scss">
.container {
    .item {
        cursor: pointer;
        .title {
            color: #005da6;
            text-decoration: underline;
            font-size: 15px;
            font-weight: 600;

            &:hover {
                color: #f60;
            }
        }
        .item_text {
            display: flex;
            margin: 12px 0;

            .el-image {
                width: 70px;
                height: 70px;
                border: 1px solid #ccc;
                background-color: #fff;
                padding: 1px;
            }
            span {
                margin-left: 15px;
                flex: 1;
                font-size: 13px;
            }
        }
        .item_info {
            display: flex;
            font-size: 13px;
            > * {
                margin-right: 35px;
            }
        }
    }
}

.el-divider {
    margin-top: 10px;
}
</style>
