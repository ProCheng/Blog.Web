<script setup lang="ts"></script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    cursor: pointer;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e3e8f7;
    border-radius: 12px;
    padding: 15px 10px;
    transition: all 0.3s;
    box-shadow: 1px 1px 1px #b3c6ff8a;

    &:hover {
        border: 1px solid #88a1f2;
        box-shadow: 1px 2px 5px #98b1fb8a;
    }
}
.el-icon {
    font-size: 20px;
    color: #7d7d7d;
    font-weight: 600;
    margin-right: 10px;
}
.msg {
    flex: 1;
}
</style>
