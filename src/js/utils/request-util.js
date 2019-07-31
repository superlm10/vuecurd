import axios from '../config/axios-config.js'

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

function buildParam(url, method, data) {

    if (data && method === 'post') {
        return axios({
            method: method,
            url: url,
            data: data
        });
    } else if (method === 'get') {
        return axios({
            method: method,
            url: url,
            params: data
        });
    } else {
        return axios({
            method: method,
            url: url
        });
    }
}

let requestUtil = {

        post(url, data) {

            handleParam(url, data);
            return buildParam(url, 'post', data);
        },

        get(url, param) {

            handleParam(url, param);
            return buildParam(url, 'get', param);
        },
};

export default requestUtil;