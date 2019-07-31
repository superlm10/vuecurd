<template>
    <div>
        <my-query :searchInfo="searchInfo"  @searchPost="searchPost" @searchPre="loadingTable" ref="mySearch"></my-query>
        <my-table :tableInfo="tableInfo" ref="myTable"></my-table>
        <my-pagitation :pageInfo="pageInfo" @updatePageInfo="updatePageInfo" ref="myPagitation"></my-pagitation>
    </div>

</template>

<script>

    import MyQuery from './my-query';
    import searchParam from '@/js/model/search-model.js';
    import MyPagitation from "./my-pagitation";
    import MyTable from "./my-table";

    export default {
        name: "curd",
        props: ['searchInfo', 'tableInfo', 'pageInfo'],
        data() {
            return {
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
                    //demo
                    if (result.resCode === '0000') {
                        this.refreshTable(result.resData.tableData);
                        this.pageInfo.total = result.resData.pageInfo.total;
                        this.refreshPagitation(pageInfo);
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

            /**
             * 刷新分页信息
             * @param data
             */
            refreshPagitation(data) {
                this.$refs.myPagitation.updatePageInfo(data);
            },

            loadingTable(val) {
                this.$refs.myTable.loadingTable(val);
            }
        },

    }
</script>

<style scoped>

</style>