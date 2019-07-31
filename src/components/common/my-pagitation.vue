<template>
    <div>
        <el-pagination
                @size-change="updateCurrentSize" @current-change="updateCurrentPage"
                :current-page="formatPageInfo.page" :page-sizes="formatPageInfo.pageSizes"
                :page-size="formatPageInfo.size" :total="formatPageInfo.total"
                layout="total,sizes,prev,pager,next,jumper">

        </el-pagination>
    </div>


</template>

<script>
    export default {
        name: "my-pagitation",
        props: ['pageInfo'],
        data() {
            return {
                formatPageInfo: {}
            }
        },
        created() {
            if (!this.pageInfo) {
                throw "请传入分页信息";
            }
            this.formatPageInfo = this.pageInfo;
        },
        methods: {
            updateCurrentPage(val) {
                this.formatPageInfo.page = val;
                this.notify();
            },
            updateCurrentSize(val) {
                this.formatPageInfo.size = val;
                this.notify();
            },
            notify() {
                this.$emit("update:pageInfo", this.formatPageInfo);
                this.$emit("updatePageInfo");
            },
            updatePageInfo(val) {
                this.formatPageInfo = val;
            }
        }

    }
</script>

<style scoped>

</style>