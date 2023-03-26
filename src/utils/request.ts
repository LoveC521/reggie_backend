import axios from 'axios';
import { ElMessage } from 'element-plus';

const BASE_URL = 'http://47.113.151.192:8080/';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

instance.interceptors.request.use(config => {
    
    return config;
});

instance.interceptors.response.use(response => {
    return response.data;
    
}, error => {
    if(error.message === 'Network Error') {
        ElMessage.error('网络异常');
    }
    return error;
});

export default instance;