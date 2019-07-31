<template>

    <el-table
            :data="tableData"
            v-loading="tableLoading"
            stripe
            style="width: 100%">

        <el-table-column v-for="item of tableColumn" :prop="item.prop" :label="item.label">


        </el-table-column>

    </el-table>


</template>

<script>

    export default {
        name: "my-table",
        props: ['tableInfo'],
        data() {
            return {
                tableLoading: false,
                tableColumn: this.tableInfo.column,
                tableData: []
            }
        },
        methods: {
            /**
             * 父组件得到Table数据后传入
             * 可结合my-query组件一同使用
             * {@link my-query}
             * @param data
             */
            updateTableData(data) {
                this.tableData = data;
            },
            loadingTable(val) {
                this.$nextTick(() => this.tableLoading = val);
            }

        },
        created() {
            this.tableLoading = this.tableInfo.loading;
            this.tableColumn = this.tableInfo.column;
        }
    }
</script>

<style scoped>

</style>