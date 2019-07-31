<template>
    <div>
        <my-query :searchInfo="searchInfo" :pageInfo.sync="pageInfo" @searchPost="searchPost" @searchPre="loadingTable" ref="mySearch"></my-query>
        <my-table :tableInfo="tableInfo" ref="myTable"></my-table>
        <my-pagitation :pageInfo="pageInfo" @updatePageInfo="updatePageInfo"></my-pagitation>
    </div>

</template>

<script>

    import MyQuery from './common/my-query';
    import searchParam from '@/js/model/search-model.js';
    import MyPagitation from "./common/my-pagitation";
    import MyTable from "./common/my-table";
    import ElementUI from 'element-ui';

    export default {
        name: "curd",
        data() {
            return {
                searchInfo: {},
                tableInfo: {},
                pageInfo: {},

                //例子：自定义事件的input数据对象
                item: {}
            }
        },
        components: {
            MyTable,
            MyPagitation,
            MyQuery
        },
        methods: {

            /**
             * 搜索之后的后置事件，如刷新表格等
             * @param axioObj
             */
            searchPost(axioObj) {
                axioObj.then(result => {

                    if (result.resCode === '0000') {
                        this.refreshTable(result.resData);
                    }

                    this.loadingTable(false);
                }).catch(e => {
                    this.loadingTable(false);
                })
            },

            /**
             * 分页组件相关操作
             * @param info
             */
            updatePageInfo() {
                this.$nextTick(() => this.$refs.mySearch.doSearch());
            },

            /**
             * 刷新表格数据，data为表格数据列表
             * @param data
             */
            refreshTable(data) {
                this.$refs.myTable.updateTableData(data);
            },

            loadingTable(val) {
                this.$refs.myTable.loadingTable(val);
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
                                message: item.name,
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
                            model: "normal",
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
                size: 10,
                total: 20
            });
        }
    }
</script>

<style scoped>

</style>