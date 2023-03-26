<script setup lang="ts">
    import Login from '@/components/login/Login.vue';
</script>

<template>
    <div class="main_box">
        <div class="login_box">
            <el-container>
                <el-aside width="600px">
                    <img src="@/assets/image/login/login-l.png" alt="">
                </el-aside>
                <el-main>
                    <Login/>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<style scoped lang="less">
    .main_box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #333;
    }

    .login_box {
        width: 1000px;
        height: 479.55px;

        .el-aside img{
            width: 600px;
        }

        .el-main {
            padding: 0;
        }
    }
    
</style>