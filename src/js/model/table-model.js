import Model from 'js-model';

let columnDefined = new Model({

    label: {
        type: String
    },

    prop: {
        type: String
    }

});

//表单数据格式定义
let tableModel = new Model({

    //获取数据的地址
    url: "",
    column: [columnDefined],
    loading: false,
    tableData: []

});

export default tableModel;