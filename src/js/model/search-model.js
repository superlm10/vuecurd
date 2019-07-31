import Model from 'js-model'

let optionModel = new Model({
    label: "",
    value: ""
});

let selectModel = new Model({
    //normal, url
    model: "",
    //model为url的时候填写
    url: "",
    option: [optionModel],
});

let searchItem = new Model({
    name: "",

    //请求后台时候的参数名
    key: "",
    value: "",
    componentType: "",
    position: "",

    //在componentType为select的时候才生效
    select: selectModel,
    customType: "",

    //这个js-model 解析function不了, 如果需要自定义事件，不要使用search-model构建数据对象
    //customFun: null
});

let searchModel = new Model({
    url: "",
    searchItem: [searchItem]

});


export default searchModel;