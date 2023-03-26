<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import {loginRequest} from '@/api/employee';
import router from '@/router';
import { useEmployeeStore } from '@/stores/employee';


// 登录表单的实例
const loginFormRef = ref<FormInstance>();
// 登录表单的数据
const loginForm = reactive({
    username: 'admin',
    password: '123456'
});
// 登录表单的校验规则
const loginFormRules = reactive<FormRules>({
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        },
        {
            min: 3,
            max: 10,
            message: '用户名在3到10位',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        },
        {
            min: 6,
            max: 15,
            message: '密码在6到15位',
            trigger: 'blur'
        }
    ]
});

// 控制登录按钮的加载状态
const isButtonLoading = ref(false);

// 全局employee状态
const employeeStore = useEmployeeStore();


// 提交登录表单
const submitLoginForm = () => {
    isButtonLoading.value = true;
    loginFormRef.value?.validate(async valid => {
        if(!valid) {
            ElMessage.error('用户名或密码不规范');
            isButtonLoading.value = false;
        }

        // 校验成功，发送登录请求
        const res = await loginRequest(loginForm);
        if(res.code === 1) {
            employeeStore.$patch({
               employee: res.data
            });
            ElMessage.success('登录成功');  
            router.push('/home')
        }
        isButtonLoading.value = false;
    });
};

</script>


<template>
    <div class="login-container">
        <div class="login-form">
            <img src="@/assets/image/login/logo.png" alt="">
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                :rules="loginFormRules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary" 
                        round 
                        color="#FFC200"
                        :loading="isButtonLoading"
                        @click="submitLoginForm">{{ isButtonLoading ? '登录中' : '登录' }}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="less">
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 214px;
        height: 307px;

        .el-button {
            margin-top: 20px;
            width: 100%;
        }
    }

    img {
        width: 139px;
        margin-bottom: 20px;
    }
</style>

