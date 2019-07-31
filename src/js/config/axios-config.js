import axios from 'axios'

axios.defaults.headers = {
    'Content-Type': 'application/json;charset=utf-8',
};
axios.defaults.timeout = 90000;
axios.defaults.baseURL = "http://192.168.11.11:8081";

axios.interceptors.response.use(res => {
    return res.data;
});

export default axios;