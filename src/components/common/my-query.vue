<template>
    <div>

        <el-form inline ref="searchForm">
            <el-form-item>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>

            <el-form-item v-if="item.position==='normal'" v-for="item of searchParamFormat" :label="item.name+'：'" :key="item.key">

                <el-input v-if="item.componentType === 'input'" v-model="item.value" :placeholder="item.name" size="small"></el-input>
                <el-select v-if="item.componentType === 'select'" v-model="item.value" placeholder="请选择" @visible-change="selectHandler(item.select)">
                    <el-option v-for="opitem of item.select.option" :key="opitem.value" :label="opitem.label" :value="opitem.value">

                    </el-option>

                </el-select>
                <el-date-picker
                        v-if="item.componentType === 'rangedate'" start-placeholder="请选择开始日期" end-placeholder="请选择结束日期"
                        type="daterange" align="right" v-model="item.value"
                        value-format = "yyyy-MM-dd"
                >
                </el-date-picker>

                <el-time-select v-if="item.componentType === 'date'" placeholder="选择时间" value-format = "yyyy-MM-dd" v-model="item.value">

                </el-time-select>

            </el-form-item>
            <el-form-item>
                <el-popover placement="bottom" trigger="click">
                    <el-button type="primary" slot="reference">更多条件</el-button>
                    <el-form label-width="90px">

                        <el-form-item v-if="item.position === 'more'" v-for="item of searchParamFormat" :label="item.name+'：'" :key="item.key">
                            <el-input v-if="item.componentType === 'input'" v-model="item.value" :placeholder="item.name" size="small"></el-input>
                            <el-select v-if="item.componentType === 'select'" v-model="item.value" placeholder="请选择" @visible-change="selectHandler(item.select)">
                                <el-option v-for="opitem of item.select.option" :key="opitem.value" :label="opitem.label" :value="opitem.value">

                                </el-option>

                            </el-select>
                            <el-date-picker
                                    v-if="item.componentType === 'rangedate'" start-placeholder="请选择开始日期" end-placeholder="请选择结束日期"
                                    type="daterange" align="right" v-model="item.value" @change="changeDate"
                                    value-format = "yyyy-MM-dd"
                            >
                            </el-date-picker>
                            <el-time-select v-if="item.componentType === 'date'" placeholder="选择时间" value-format = "yyyy-MM-dd" v-model="item.value">

                            </el-time-select>

                            <!--插槽，父组件可进行特定需求拓展-->
                            <slot></slot>
                        </el-form-item>


                    </el-form>


                </el-popover>
            </el-form-item>
            <el-form-item>
                <el-button type="success" icon="el-icon-search" circle @click="doSearch"></el-button>
            </el-form-item>

        </el-form>



    </div>
</template>

<script>

    import searchModel from '@/model/search-model.js'
    import urlUtil from '@/js/url-util'
    import requestUtil from '@/js/request-util'

    export default {
        name: "my-query",
        props: ['searchInfo'],
        data() {
          return {
              url: "",
              searchParamFormat: {}
          }
        },

        created() {
            let formatParam = searchModel.dispose(this.searchInfo);
            this.searchParamFormat = formatParam.searchItem;
            this.url = formatParam.url;
        },

        methods: {
            doSearch() {
                let requestData = urlUtil.parseRequest(this.searchParamFormat);
                let axioObj = requestUtil.post(this.url, requestData);
                this.$emit('searchPost', axioObj);
            },

            reset() {
                for (let item of this.searchParamFormat) {
                    if (item) {
                        item.value = '';
                    }
                }
            },

            selectHandler(item) {
                if (item.model === 'normal') {
                    //不处理
                    return;
                } else if (item.model === 'url') {
                    //@TODO 请求地址
                }
            },
        }
    }
</script>

<style scoped>

</style>