import Model from 'js-model'


let pagitation = new Model({

    //当前页
    page: {
        type: Number,
        default: 1
    },

    //每页数
    size: {
        type: Number,
        default: 10
    },

    //总记录数
    total: {
        type: Number,
        default: 0
    },

});

export default pagitation;