<font size="6"><center>Vue公用组件使用文档</center></font>

---
[TOC]

### 文档修订记录

****
| 修订日期   | 修订内容 | 版本  | 修改人               |
| ---------- | :------: | :---: | -------------------- |
| 2019/7/31 | 文档初建 | V 1.0 | 方柳鸣 |


### 1.搜索组件使用说明

暂时先写搜索组件的说明，分页与表格的说明之后再写

组件使用：
```java
	1.:searchInfo 为搜索数据，详情见下方的数据说明
	2.:pageInfo.sync 为分页数据，这个是配合分页组件以及表格组件使用，若不需要可不写
	3.@searchPost 搜索结束后的后置事件
	4.@searchPre 搜索开始时的前置事件
	
    <my-query 
        :searchInfo="searchInfo" 
        :pageInfo.sync="pageInfo" 
        @searchPost="searchPost" 
        @searchPre="loadingTable">
    </my-query>
```

数据示例：

```java
			1.url 为搜索请求后端的地址
			2.searchItem 为搜索每一条件项数据，接下来具体说明
			3.name 为条件项的label名称
			4.key 为该条件项最终请求后端的参数名称
			5.value 为绑定的值
			6.componentType 为条件项类型，
			  目前支持的有：输入框-input, 下拉框-select, 单个时间-date, 
			  时间范围-rangedate
			7.position 为该条件项在页面呈现时，是否在更多条件按钮选项之中，
			  normal为正常在外显示，more为在更多条件之中
			8.customType 为自定事件类型，对应element-ui组件的事件名，如focus
			9.customFun 为自定义事件


			{
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
                            //注意：当下拉框的值需要从后台拉取时，model改为url
                            //url字段上写上请求地址，如: /test/status
                            //组件会自动去后台拉取
                            url: "",
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
            }



```