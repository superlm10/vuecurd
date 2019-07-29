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
    select: selectModel
});

let searchModel = new Model({
    url: "",
    searchItem: [searchItem]

});


export default searchModel;