<script setup lang="ts">
import {SwitchButton} from '@element-plus/icons-vue';
import router from '@/router';
import { reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import {useEmployeeStore} from '@/stores/employee';

const employeeStore = useEmployeeStore();  


// 菜单
const menuList = reactive([
    {
        path: '/employee',
        name: '员工管理',
        icon: 'iconfont icon-employee',
        isSelected: true
    },
    {
        path: '/category',
        name: '分类管理',
        icon: 'iconfont icon-fenlei',
        isSelected: false
    },
    {
        path: '/dish',
        name: '菜品管理',
        icon: 'iconfont icon-caipin-',
        isSelected: false
    },
    {
        path: '/setmeal' ,
        name: '套餐管理',
        icon: 'iconfont icon-taocan',
        isSelected: false
    },
    {
        path: '/order',
        name: '订单明细',
        icon: 'iconfont icon-dingdan',
        isSelected: false
    }
]);

// 退出登录
const logout = () => {
    ElMessageBox.confirm(
        '你确定要退出登录吗?',
        '警告',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }
    ).then(() => {
        router.push('/login');
        ElMessage.success('退出成功');
    }).catch(() => {
        
    });
    
    
};

// 设置被选中菜单的样式
const selectMenuIndex = (index: string) => {
    menuList.some((item) => {
        if(item.path === index) {
            item.isSelected = true;
        }else {
            item.isSelected = false;
        }
    });
};

</script>

<template>
    <el-container>
      <el-header>
        <img src="@/assets/image/login/login-logo.png" alt="">
        <div class="user">
            <span>{{ employeeStore.employee.name }}</span>
            <el-button 
                :icon="SwitchButton" 
                circle
                @click="logout"
            ></el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="/employee"
                background-color="#343744"
                text-color="#BFCDB9"
                active-text-color="#000"
                router
                @select="selectMenuIndex"
                v-for="menu in menuList"
                :key = "menu.path"
                >
                <el-menu-item 
                    :index="menu.path" :class="menu.isSelected ? 'active-background-color': ''">
                    <el-icon :class="menu.icon"></el-icon>
                    <span>{{menu.name}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>


   
</template>

<style scoped lang="less">
    .el-container {
        height: 100%;
    }
    .el-header {
        display: flex;
        background-color: #343744;
        justify-content: space-between;
        align-items: center;

        img {
            width: 117px;
        }

        .user {
            span {
                margin-right: 10px;
                line-height: 60px;
                color: #fff;
            }
        }
    }

    .el-aside {
        background-color: #343744;

        .el-menu {
            margin-top: 20px;
            border: 0;
        }
        .el-menu-item {
            margin-top: 10px;
            

            .el-icon {
                margin-left: 20px;
            }     
        }
    }

    .el-menu-item.active-background-color{
        background-color: #fff;
    }
</style>