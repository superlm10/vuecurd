import axios from 'axios'

axios.defaults.headers = {
    'Content-Type': 'application/json;charset=utf-8',
};
axios.defaults.timeout = 90000;
axios.defaults.baseURL = "http://192.168.11.11:8081";

function handleParam(url, data) {
    if (!url) {
        throw "url不能为空";
    }

    if (data) {
        for (let item in data) {
            if (!data[item]) {
                delete data[item];
            }
        }
    }

}

let requestUtil = {

        post(url, data) {

            handleParam(url, data);

            return axios({
                method: 'post',
                url: url,
                data: data
            });
        },

        get(url, param) {

            handleParam(url, data);

            return axios({
                method: 'get',
                url: url,
                params: data
            });
        },
};

export default requestUtil;