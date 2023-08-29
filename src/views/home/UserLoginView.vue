<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type FormInstance, type FormItemProp, type FormRules, ElMessage } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    UserName: '',
    Password: ''
})
const rules = reactive<FormRules>({
    UserName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 12, message: '账号长度6到12', trigger: 'blur' }
    ],
    Password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, max: 12, message: '密码长度8到12', trigger: 'blur' }
    ]
})

const loginBtn = async () => {
    await ruleFormRef.value!.validate((valid, fields) => {
        if (valid) {
            ElMessage({
                message: '登录成功',
                type: 'success'
            })
        } else {
            ElMessage({
                message: '输入有误',
                type: 'warning'
            })
        }
    })
}
</script>

<template>
    <div class="container">
        <div class="login-box">
            <h2>用户登录</h2>
            <el-form
                style="width: 70%; margin: auto"
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-position="top"
                status-icon
            >
                <el-form-item label="账号" prop="UserName">
                    <el-input v-model="ruleForm.UserName" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item label="密码" prop="Password">
                    <el-input type="password" v-model="ruleForm.Password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button class="loginBtn" @click="loginBtn">
                        <span class="span1"></span>
                        <span class="span2"></span>
                        <span class="span3"></span>
                        <span class="span4"></span>
                        <span class="text">进入</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped>
.el-form :deep(.el-form-item__label) {
    color: #03e9f4 !important;
}
.container {
    height: 100vh;
    font-family: sans-serif;
    background: linear-gradient(#2f3146, #243b55);
}
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: linear-gradient(#335468, #173440);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
}
.login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}

.login-box .loginBtn {
    position: relative;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;

    background: transparent;

    .text {
        color: #03e9f4;
    }
}
.login-box .loginBtn:hover {
    background: #03e9f4;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
    .text {
        color: #fff !important;
    }
}

.login-box .el-button .span1,
.span2,
.span3,
.span4 {
    position: absolute;
    display: block;
}
.login-box .el-button .span1 {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
    0% {
        left: -100%;
    }
    50%,
    100% {
        left: 100%;
    }
}
.login-box .el-button .span2 {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes btn-anim2 {
    0% {
        top: -100%;
    }
    50%,
    100% {
        top: 100%;
    }
}
.login-box .el-button .span3 {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes btn-anim3 {
    0% {
        right: -100%;
    }
    50%,
    100% {
        right: 100%;
    }
}
.login-box .el-button .span4 {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }
    50%,
    100% {
        bottom: 100%;
    }
}
</style>
