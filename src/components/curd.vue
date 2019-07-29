<template>

    <my-query :searchInfo="searchInfo" @searchPost="searchPost"></my-query>


</template>

<script>

    import myQuery from './common/my-query';
    import searchParam from '@/model/search-model.js';

    export default {
        name: "curd",
        data() {
            return {
                searchInfo: {}
            }
        },
        components: {
            myQuery
        },
        methods: {
            searchPost(axioObj) {
                axioObj.then(result => {
                    console.log("OK");
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        created() {
            this.searchInfo = searchParam.parse({
                url: "/test/test",
                searchItem: [
                    {
                        name: '姓名',
                        key: 'name',
                        value: '',
                        componentType: 'input',
                        position: 'normal'
                    },
                    {
                        name: '状态',
                        key: 'status',
                        value: '',
                        componentType: 'select',
                        position: 'normal',
                        select: {
                            model: "normal",
                            url: null,
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
            });
        }
    }
</script>

<style scoped>

</style>