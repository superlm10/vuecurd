<template>
    <curd :searchInfo="searchInfo" :tableInfo="tableInfo" :pageInfo="pageInfo"></curd>
</template>

<script>
    import Curd from "./common/curd";
    import ElementUI from 'element-ui';

    export default {
        name: "demo",
        components: {Curd},
        data() {
            return {
                //例子：自定义事件的input数据对象
                item: {}
            }
        },
        created() {
            let _this = this;
            this.searchInfo = {
                url: "/test/table",
                searchItem: [
                    {
                        name: '姓名',
                        key: 'name',
                        value: '',
                        componentType: 'input',
                        position: 'normal',
                        customType: 'focus',
                        customFun: function(item) {
                            //保存，方便弹框之后修改item的数据
                            _this.item = item;
                            //弹出组件，弹框等...
                            ElementUI.Message({
                                message: "自定义事件: " + item.name,
                                type: 'success'
                            })
                        }
                    },
                    {
                        name: '状态',
                        key: 'status',
                        value: '',
                        componentType: 'select',
                        position: 'normal',
                        select: {
                            model: "url",
                            url: "/test/status",
                            option: [{
                                label: '处理中',
                                value: '1'
                            },{
                                label: '完成',
                                value: '2'
                            }]
                        }
                    },
                    {
                        name: '操作时间',
                        key: 'startTime-endTime',
                        value: '',
                        componentType: 'rangedate',
                        position: 'more'
                    },
                    {
                        name: '测试时间',
                        key: 'testTime',
                        value: '',
                        componentType: 'date',
                        position: 'more'
                    },
                ]
            };

            this.tableInfo = this.dataBuilder.buildTableModel({

                column: [{
                    label: "姓名",
                    prop: "name"
                },{
                    label: "年龄",
                    prop: "age"
                },{
                    label: "技能",
                    prop: "skill"
                }]
            });

            this.pageInfo = this.dataBuilder.buildPagination({
                page: 1,
                size: 10
            });
        }
    }
</script>

<style scoped>

</style>