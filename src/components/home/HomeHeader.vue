<script setup lang="ts">
import { useGlobal } from '@/stores/global'
const globalStore = useGlobal()
</script>

<template>
    <div :class="[{ header: globalStore.scrollTop != 0 }]">
        <div class="container">
            <div class="logo">每日一记</div>
            <ul class="menus-items">
                <li class="menus_item">首页</li>
                <li class="menus_item">
                    <span>文章</span>
                    <ul class="menus_item_child">
                        <li class="menus_item_child_item">标签</li>
                        <li class="menus_item_child_item">分类</li>
                        <li class="menus_item_child_item">归档</li>
                    </ul>
                </li>
                <li class="menus_item">聊天室</li>

                <li class="menus_item">关于</li>
            </ul>
            <div class="shortcut_btn">
                <el-progress
                    type="circle"
                    :stroke-width="3"
                    :width="20"
                    :color="'#000'"
                    :show-text="false"
                    :percentage="globalStore.scrollTop"
                />
                <user-avatar></user-avatar>
                <el-icon :size="25" :color="'#000'">
                    <i-ep-promotion />
                </el-icon>
                <el-icon :size="25" :color="'#000'">
                    <i-ep-search />
                </el-icon>
            </div>
        </div>
    </div>
    <!-- 占位 -->
    <div :class="[{ placeholder: globalStore.scrollTop != 0 }]"></div>
</template>

<style lang="scss" scoped>
.placeholder {
    height: 60px;
}
.header {
    outline: 1px solid #e3e8f7;
    box-shadow: 0px 0px 20px #c2cef2;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 1;
    top: 0;
    left: 0;
}
.container {
    margin: auto;
    max-width: 1350px;

    color: #565656;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 18px;
    font-weight: 600;
}
.shortcut_btn {
    display: flex;
    align-items: center;
    > * {
        cursor: pointer;
        margin-left: 30px;
    }
}

.logo {
    font-size: 20px;
    color: #2b2b2b;
    cursor: pointer;
}
.menus-items {
    letter-spacing: 0.3rem;
    display: flex;
    li {
        // 通用的item属性
        display: flex;
        position: relative;
        white-space: nowrap;
        justify-content: center;
        transition: all 0.2s;
        cursor: pointer;
        padding: 3px 15px;
        border-radius: 15px;
        margin: 0 12px;
    }
    .menus_item {
        &:hover {
            background-color: #425aef;
            color: #fff;
        }
        &:hover .menus_item_child {
            display: flex;
        }
    }
    .menus_item_child {
        box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
        font-size: 17px;
        transition: all 0.3s;
        background-color: #fff;
        border-radius: 50px;
        color: #565656;
        display: none;
        position: absolute;
        top: 40px;
        border: 1px solid transparent;

        &::before {
            position: absolute;
            top: -20px;
            left: 0px;
            width: 100%;
            height: 40px;
            content: '';
        }
        &:hover {
            display: flex !important;
            border-color: #425aef;
        }
    }
    .menus_item_child_item {
        margin: 4px 5px;
        padding: 5px 8px;
        border-radius: 60px;
        &:hover {
            background-color: #425aef;
            color: #fff;
        }
    }
}
</style>
