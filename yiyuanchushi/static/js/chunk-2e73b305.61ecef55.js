(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e73b305"],{"4b32":function(t,e,a){"use strict";var n=a("fd1c"),r=a.n(n);r.a},"4ec3":function(t,e,a){"use strict";a.d(e,"r",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"i",(function(){return l})),a.d(e,"g",(function(){return i})),a.d(e,"j",(function(){return u})),a.d(e,"h",(function(){return c})),a.d(e,"m",(function(){return s})),a.d(e,"f",(function(){return d})),a.d(e,"l",(function(){return f})),a.d(e,"s",(function(){return m})),a.d(e,"p",(function(){return b})),a.d(e,"n",(function(){return p})),a.d(e,"q",(function(){return v})),a.d(e,"o",(function(){return h})),a.d(e,"c",(function(){return g})),a.d(e,"a",(function(){return y})),a.d(e,"d",(function(){return j})),a.d(e,"b",(function(){return _})),a.d(e,"k",(function(){return O}));var n=a("b775"),r="http://api.yyfsdjk.com/upload";function o(t){return Object(n["a"])({url:"customer/a",method:"get",params:t})}function l(t,e){return Object(n["a"])({url:"customer/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function i(t){return Object(n["a"])({url:"customer",method:"post",data:t})}function u(t){return Object(n["a"])({url:"customer",method:"put",data:t})}function c(t){return Object(n["a"])({url:"customer",method:"delete",params:t})}function s(t){return Object(n["a"])({url:"store",method:"get",params:t})}function d(t){return Object(n["a"])({url:"combo",method:"get",params:t})}function f(t){return Object(n["a"])({url:"position",method:"get",params:t})}function m(t){return Object(n["a"])({url:"attendance",method:"get",params:t})}function b(t){return Object(n["a"])({url:"staff",method:"get",params:t})}function p(t){return Object(n["a"])({url:"staff",method:"post",data:t})}function v(t){return Object(n["a"])({url:"staff",method:"put",data:t})}function h(t){return Object(n["a"])({url:"staff",method:"delete",params:t})}function g(t){return Object(n["a"])({url:"balance",method:"get",params:t})}function y(t){return Object(n["a"])({url:"balance",method:"post",data:t})}function j(t){return Object(n["a"])({url:"balance",method:"put",data:t})}function _(t){return Object(n["a"])({url:"balance",method:"delete",params:t})}function O(t){return Object(n["a"])({url:"order",method:"get",params:t})}},aa5b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{clearable:"",placeholder:"请选择员工"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),t._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择状态状态"},model:{value:t.valueState,callback:function(e){t.valueState=e},expression:"valueState"}},t._l(t.optionsState,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"tablee"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"员工名称"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"salary",label:"底薪"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"提成"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"结算时间"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(a){return t.getEditData(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"danger"},on:{click:function(a){return t.delData(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑工资",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"工资调整","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入工资"},model:{value:t.form.salary,callback:function(e){t.$set(t.form,"salary",e)},expression:"form.salary"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},r=[],o=(a("7f7f"),a("4ec3")),l={name:"Wages",data:function(){return{options:[{value:"选项1",label:"员工1"},{value:"选项2",label:"员工2"}],optionsState:[{value:"选项1",label:"状态1"},{value:"选项2",label:"状态2"}],value:"",valueState:"",value1:"",value2:new Date,btnLoading:!1,name:"",tableData:[],dialogFormVisible:!1,form:{salary:""},formLabelWidth:"100px"}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(o["p"])({id:this.$route.params.id}).then((function(e){t.tableData=e.data.data})).catch((function(){t.tableData=[]}))},getEditData:function(t){this.dialogFormVisible=!0,this.form.name=t.name,this.form.id=t.id,this.form.phone=t.phone,this.form.salary=t.salary},addSubmit:function(){var t=this;this.form.id?Object(o["q"])(this.form).then((function(){t.$notify.success({title:"成功",message:"店铺修改成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})):Object(o["n"])(this.form).then((function(){t.$notify.success({title:"成功",message:"店铺添加成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))},delData:function(t){var e=this;this.$confirm("此操作将永久删除该店铺, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={id:t.id};Object(o["o"])(a).then((function(t){e.$notify.success({title:"成功",message:"店铺删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消删除"})}))}}},i=l,u=(a("4b32"),a("2877")),c=Object(u["a"])(i,n,r,!1,null,"59084602",null);e["default"]=c.exports},fd1c:function(t,e,a){}}]);