import Mock from 'mockjs';
import axiosConfig from '@/js/config/axios-config.js'

Mock.setup({
    timeout: 0 - 300
});

let urlPre = axiosConfig.defaults.baseURL;


Mock.mock(urlPre + '/test/table', 'post', {
    "resCode": "0000",
    "resMsg": "success",
    "resData": [{"skill": "vvv", "name": "lm-布莱恩特", "age": "22"}, {
        "skill": "vvv",
        "name": "勒布朗-zr",
        "age": "22"
    }, {"skill": "vvv", "name": "詹姆斯-sd", "age": "22"}]
});

Mock.mock(urlPre + '/test/status', 'get', {
    "resCode": "0000",
    "resMsg": "success",
    "resData": [{"label": "后台处理中", "value": 1}, {"label": "后台成功", "value": 2}]
})

