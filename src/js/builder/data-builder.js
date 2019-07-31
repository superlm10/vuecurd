
import pagitaionModel from '@/js/model/pagitation-model.js'
import tableModel from '@/js/model/table-model.js'
import searchModel from '@/js/model/search-model.js'

/**
 * @TODO 表格对象可包括 分页对象与表格对象
 * 为了让使用者很好的区分，这里对象构造暂时都区分开来
 */

let dataBuilder = {

    /**
     * 构造分页组件数据对象
     */
    buildPagination(val) {
        let defaultPageSizes = [10,20,50,100,150];
        if (val) {
            let obj = pagitaionModel.parse(val);
            if (!obj.pageSizes) {
                obj.pageSizes = defaultPageSizes;
            }
            return obj;
        } else {
            let obj = pagitaionModel.parse({});
            if (!obj.pageSizes) {
                obj.pageSizes = defaultPageSizes;
            }
            return obj;
        }

    },

    /**
     * 构建搜索框对象
     * @returns {*}
     */
    buildSearchModel(val) {
        if (val) {
            return searchModel.parse(val);
        } else {
            return searchModel.parse({})
        }
    },

    /**
     * 构造表格对象
     * @returns {*}
     */
    buildTableModel(val) {

        if (val) {
            return tableModel.parse(val);
        } else {
            return tableModel.parse({})
        }

    }

};

export default dataBuilder;