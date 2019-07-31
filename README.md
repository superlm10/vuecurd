# 2214

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<font size="6"><center>Vue公用组件使用文档</center></font>

---
[TOC]

### 文档修订记录

****
| 修订日期   | 修订内容 | 版本  | 修改人               |
| ---------- | :------: | :---: | -------------------- |
| 2019/7/31 | 文档初建 | V 1.0 | 方柳鸣 |

### 项目地址

https://github.com/lmlemonfish/vuecurd.git

### 1.搜索组件使用说明


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

<span id="searchInfo"></span>
searchInfo数据示例：

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
                        //当组件类型为时间范围时，key用 - 进行分割，
                        //最终请求后台时，会被解析为两个参数
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

### 2.表格组件使用说明

组件使用：
```java
    <my-table 
        :tableInfo="tableInfo" ref="myTable">
    </my-table>
```

<span id="tableInfo"></span>
tableInfo数据示例：

```java
		1.column 为element-ui表格组件每一列对应的表头名称(label)以及属性(prop)
		
        {
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
       }

```

另外：
该组件内部提供方法updateTableData，用于与其他组件交互更新数据使用，详情见代码DEMO

### 3.分页组件使用说明

组件使用：
```java
    <my-pagitation 
    	:pageInfo="pageInfo" 
    	@updatePageInfo="updatePageInfo">
    </my-pagitation>
```

<span id="pageInfo"></span>
pageInfo数据示例：

```java
		1.page 为默认当前页
		2.size 为每页条目数
		
        {
             page: 1,
             size: 10
        }

```

### 4.curd组件使用说明

组件使用：
```java
    <curd 
    	:searchInfo="searchInfo" 
    	:tableInfo="tableInfo" 
    	:pageInfo="pageInfo">
    </curd>
```

searchInfo数据对应搜索组件的数据说明 [点击跳转](#searchInfo)
tableInfo数据对应表格组件的数据说明 [点击跳转](#tableInfo)
pageInfo数据对应分页组件的数据说明 [点击跳转](#pageInfo)

### 5.请求后台数据格式说明

```java
	搜索组件默认格式入参格式:
	{
		"key": "value",
		
		//如果有分页
		pageInfo: {
			"page": xxx,
			"size": xxx
		}
	}
```


如果入参以及后台返回格式与默认格式不一致，请自行修改url-util内的参数格式。

### 6.关于CURD组件的默认逻辑简单说明
1.通过数据成功构造出搜索框组件页面，表格组件页面， 分页组件页面
2.搜索组件，点击搜索，解析构建数据，请求后端，将获取的数据传递给表格组件以及分页组件，更新数据。

可根据自己项目需求，微调curd页面，
例如：后台返回的数据格式根据项目调整

后台默认返回格式为：
```java
	{
		//0000 表示成功，其他状态码为失败
		resCode: "0000"
		//数据
		resData: {}
	}
```