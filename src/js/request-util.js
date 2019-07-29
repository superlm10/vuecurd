import axios from 'axios'

axios.defaults.headers = {
    'Content-Type': 'application/json;charset=utf-8',
};
axios.defaults.timeout = 90000;
axios.defaults.baseURL = "http://192.168.11.11:8081";


let requestUtil = {

    post(url, data) {

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

        return axios({
            method: 'post',
            url: url,
            data: data
        });
    }


};

export default requestUtil;