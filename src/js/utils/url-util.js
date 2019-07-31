
//分页入参结构
let pageinfoStruct = {
    page: '',
    size: ''
}

let urlParseApi = {

    /**
     * 解析构造http请求对象
     * @param searchModel
     * @param pageinfo 可为空
     */
    parseRequest(searchModel, pageinfo) {

        let requestData = {};

        for (let item of searchModel) {

            let paramName = item.key;
            let paramValue = item.value;
            let componentType = item.componentType;

            if (componentType === 'rangedate') {
                //需要拆分分隔符
                let splitParamNames = paramName.split('-');

                if (splitParamNames.length !== 2) {
                    throw "rangedate时间类型格式不正确";
                }

                let startParamName = splitParamNames[0];
                let endParamName = splitParamNames[1];

                let startParamValue = paramValue[0];
                let endParamValue = paramValue[1];

                requestData[startParamName] = startParamValue;
                requestData[endParamName] = endParamValue;

            } else {
                requestData[paramName] = paramValue;
            }

        }

        if (pageinfo) {
            pageinfoStruct.page = pageinfo.page;
            pageinfoStruct.size = pageinfo.size;

            requestData.pageInfo = Object.assign({}, pageinfoStruct);
        }


        return requestData;
    }

}


export default urlParseApi;