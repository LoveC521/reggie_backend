import requst from '@/utils/request';

// 登录方法
export const loginRequest = (data: {
    username: string,
    password: string
}) => {
    return requst.post('/employee/login', {
        username: data.username,
        password: data.password
    });
};