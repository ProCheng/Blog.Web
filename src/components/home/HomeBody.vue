<script setup lang="ts">
defineProps<{
    msg: string
}>()

import { ref, reactive } from 'vue'

const greeting = ref()

const greetingFu = () => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    if (currentHour >= 5 && currentHour < 12) {
        greeting.value = '早上好'
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting.value = '中午好'
    } else {
        greeting.value = '晚上好'
    }
}
greetingFu()

const article = reactive({
    total: 14,
    row: 6,
    data: []
})
</script>

<template>
    <div class="container">
        <!-- 系统通知 -->
        <text-container style="margin: 20px 0">
            <el-icon>
                <i-ep-Bell />
            </el-icon>
            <div class="msg">通知：<span>测试版本</span></div>
        </text-container>

        <!-- body头部卡片 -->
        <div class="card">
            <div class="left">
                <div class="banners">
                    <span>嘿！ {{ greeting }} </span>
                    <div class="banners_mask">
                        <span>随便逛逛</span>
                        <el-icon :size="80" :color="'#9bb8ca'">
                            <i-ep-Right />
                        </el-icon>
                    </div>
                </div>
                <div class="category_group">
                    <div class="category_item">
                        <span>必看精选</span>
                    </div>
                    <div class="category_item">
                        <span>热门文章</span>
                    </div>
                    <div class="category_item">
                        <span>实用教程</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <span class="title">今日推荐</span>
            </div>
        </div>
        <!-- 主体 -->
        <div class="body">
            <main>
                <text-container style="margin-bottom: 20px">
                    <ul class="category_group">
                        <li class="category_item category_item_selected">首页</li>
                        <li class="category_item">默认分类</li>
                    </ul>
                </text-container>

                <article-list></article-list>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="article.total"
                    :page-sizes="[10, 20, 50]"
                    :page-size="article.row"
                />
            </main>
            <aside>
                <el-card shadow="always">
                    <div class="card_title">
                        <el-icon :size="20"><i-ep-Comment /></el-icon>
                        <span>最新评论</span>
                    </div>
                    <el-divider border-style="dashed" />
                    <div class="content">
                        <p>
                            <span class="author">管理员：</span>
                            <span>测试1</span>
                        </p>
                        <p>
                            <span class="author">管理员：</span>
                            <span>测试2</span>
                        </p>
                        <p>
                            <span class="author">管理员：</span>
                            <span>测试3</span>
                        </p>
                    </div>
                </el-card>
                <el-card shadow="always">
                    <div class="card_title">
                        <el-icon :size="20"><i-ep-HelpFilled /></el-icon>
                        <span>最新发布</span>
                    </div>
                    <el-divider border-style="dashed" />
                    <div class="content">
                        <p>
                            <span>从原理聊 JVM（五）：JVM 的编译过程和优化手段</span>
                        </p>
                        <p>
                            <span>Qt开发思想探幽]QObject、模板继承和多继承</span>
                        </p>
                        <p>
                            <span>如何将现有的`Blazor`项目的主题切换写的更好看?</span>
                        </p>
                    </div>
                </el-card>
                <el-card shadow="always">
                    <div class="card_title">
                        <el-icon :size="20"><i-ep-Histogram /></el-icon>
                        <span>阅读排行榜</span>
                    </div>
                    <el-divider border-style="dashed" />
                    <div class="content">
                        <p>
                            <span class="number">1</span>
                            <span>从原理聊 JVM（五）：JVM 的编译过程和优化手段</span>
                        </p>
                        <p>
                            <span class="number">2</span>
                            <span>Qt开发思想探幽]QObject、模板继承和多继承</span>
                        </p>
                        <p>
                            <span class="number">3</span>
                            <span>如何将现有的`Blazor`项目的主题切换写的更好看?</span>
                        </p>
                    </div>
                </el-card>
            </aside>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: space-between;
    > div {
        border-radius: 15px;
        height: 330px;
        width: 49%;
    }
    .right {
        position: relative;
        cursor: pointer;
        background: url(https://liuzhihang.com/upload/hao_dark.jpg) no-repeat center/cover;
        .title {
            color: #fff;
            font-size: 50px;
            left: 8%;
            bottom: 13%;
            position: absolute;
            font-weight: 600;
        }
    }
    .left {
        .banners {
            position: relative;
            background: url(https://www.whuanle.cn/wp-content/uploads/2019/07/5O0Y6yRpX3.jpg) no-repeat center/cover;
            cursor: pointer;
            overflow: hidden;
            border-radius: 15px;
            height: 75%;
            background-color: #fff;
            border: 1px solid #e3e8f7;
            span {
                color: #69d9d8;
                font-size: 35px;
                font-weight: 600;
                display: block;
                margin: 30px 0 0 40px;
            }
            .banners_mask {
                transition: all 0.5s;

                position: absolute;
                opacity: 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(68 87 212 / 62%);
                backdrop-filter: blur(5px);
                cursor: pointer;

                span {
                    color: #def2ff;
                    font-size: 80px;
                    margin: 15px 0 0 50px;
                }
                .el-icon {
                    margin-left: 50px;
                }
            }
            &:hover .banners_mask {
                opacity: 1;
            }
        }
        .category_group {
            display: flex;
            height: 25%;
            .category_item {
                transition: all 0.3s;
                position: relative;
                flex: 1;
                border-radius: 10px;
                margin: 12px 12px 0 0;
                cursor: pointer;
                span {
                    color: #fff;
                    font-size: 17px;
                    font-weight: 600;
                    position: relative;
                    top: 25%;
                    left: 10%;
                    &::after {
                        position: absolute;
                        bottom: -5px;
                        width: 1em;
                        left: 0;
                        height: 2px;
                        background: #fff;
                        content: '';
                    }
                }
            }
            .category_item:nth-child(1) {
                background: linear-gradient(to right, #358bff, #15c6ff);
            }
            .category_item:nth-child(2) {
                background: linear-gradient(to right, #ff6655, #ffbf37);
            }
            .category_item:nth-child(3) {
                margin-right: 0;
                background: linear-gradient(to right, #18e7ae, #1eebeb);
            }
            .category_item:hover {
                flex: 1.5;
            }
        }
    }
}

.body {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    > main {
        height: 100%;
        width: 78%;
    }
    > aside {
        width: 20%;
        height: 100%;
        .content {
            font-size: 12px;
            margin-left: 6px;
            p {
                margin-bottom: 10px;
            }
            .author {
                color: #075db3;
            }
            .number {
                color: #ff6655;
                font-size: 15px;
                font-weight: 600;
                margin-right: 8px;
            }
        }
    }
    .card_title {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #2a2a2a;
        font-weight: 600;
        .el-icon {
            margin-right: 6px;
        }
    }
    .category_group {
        display: flex;
        flex-wrap: wrap;
        .category_item {
            font-weight: 600;
            transition: all 0.3s;
            margin-right: 10px;
            padding: 3px 12px;
            border-radius: 8px;

            &.category_item_selected,
            &:hover {
                background-color: #425aef;
                color: #fff;
            }
        }
    }
}

.el-card {
    border-radius: 15px;
    margin-bottom: 25px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
}
.el-divider {
    margin: 10px 0;
}
</style>
