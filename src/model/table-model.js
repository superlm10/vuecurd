import model from 'js-model';

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

    column: columnDefined,
    list: []

});

export default tableModel;