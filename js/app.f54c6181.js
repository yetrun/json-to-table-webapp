(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([1,"chunk-vendors"]),r()})({0:function(t,e){},1:function(t,e,r){t.exports=r("56d7")},"1b81":function(t,e,r){var n=r("9926"),a=r("288c");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stack";return"flatten"===e?n(t):a(t)}t.exports=i},2:function(t,e){},"25d5":function(t,e,r){t.exports={generateTable:r("29da"),generateHTMLTable:r("d3b2"),generateExcel:r("dbff"),parseDataToSchema:r("1b81"),VERSION:r("4c93").version}},"288c":function(t,e,r){var n=r("448a").default,a=r("278c").default;r("d81d"),r("4fad"),r("99af");var i=r("d7bc"),o=i.isObject,s=i.merge;function c(t){return t=u(t),l(t)}function l(t){return Object.entries(t).map((function(t){var e=a(t,2),r=e[0],n=e[1],i=l(n);return i.length>0?{title:r,path:r,props:i}:{title:r,path:r}}))}function u(t){if(Array.isArray(t))return s.apply(void 0,[{}].concat(n(t.map((function(t){return u(t)})))));if(o(t)){for(var e={},r=0,i=Object.entries(t);r<i.length;r++){var c=a(i[r],2),l=c[0],f=c[1];e[l]=u(f)}return e}return{}}t.exports=c},"29da":function(t,e,r){var n=r("ded3").default,a=r("b17c").default,i=r("448a").default;r("d81d");var o=r("d7bc"),s=o.flatten,c=r("409c"),l=r("6f5d"),u=r("f548"),f=r("7609"),d=r("c247"),p=r("4dcf"),h=r("1b81");function v(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=void 0===e||null===e?h(t,r.parseDataToSchema):p(e),e=f(e),{header:b(e),body:m(t,e)}}function b(t){var e=a(c,i(t.size));return l(t,e),e.map((function(t,e,r){if(void 0!=t)return n({row:1+e,col:1+r},t)})).toArray()}function m(t,e){Array.isArray(t)||(t=[t]);var r=1+e.size[0];return s(t.map((function(t){var n=d(t,e),a=y(t,e,n,r);return r+=n[0],a})))}function y(t,e,r,o){var s=a(c,i(r));return u(t,e,s),s.map((function(t,e,r){if(t)return n({row:o+e,col:1+r},t)})).toArray()}t.exports=v},3:function(t,e){},"39af":function(t,e,r){var n=r("278c").default;r("d81d"),r("ac1f"),r("1276"),r("5319");var a=r("d7bc"),i=a.flatten;function o(t,e){if(""===e)return t;var r=s(t,e);return 0===r.length?void 0:1===r.length?r[0]:r}function s(t,e){if(Array.isArray(t)){var r=t.map((function(t){return s(t,e)}));return i(r)}if(void 0===t||null===t)return[void 0];var a=e.replace(".","<br>").split("<br>"),o=n(a,2),c=o[0],l=o[1],u=t[c];return l?s(u,l):[u]}t.exports=o},"409c":function(t,e,r){var n=r("ed6d").default,a=r("2d0d").default,i=r("a128").default,o=r("278c").default,s=r("970b").default,c=r("5bc3").default;r("159b"),r("7039"),r("4de4"),r("2ca0"),r("e439"),r("99af");var l=r("d7bc"),u=l.difference,f=l.isFunction,d=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;s(this,t),this._rows=e,this._cols=r,this._array=new Array(e*r)}return c(t,[{key:"rows",get:function(){return this._rows}},{key:"cols",get:function(){return this._cols}},{key:"getVal",value:function(t,e){return this._array[this._arrayIndex(t,e)]}},{key:"setVal",value:function(t,e,r){this._array[this._arrayIndex(t,e)]=r}},{key:"_arrayIndex",value:function(e,r){if(e>=this.rows||r>=this.cols)throw new t.IndexOutOfBounds(e,r);return e*this.cols+r}},{key:"forEach",value:function(t){for(var e=0;e<this.rows;e++)for(var r=0;r<this.cols;r++){var n=this.getVal(e,r);t(n,e,r)}}},{key:"map",value:function(e){var r=[];this.forEach((function(t,n,a){var i=e(t,n,a);r.push(i)}));var n=new t(this.rows,this.cols);return n._array=r,n}},{key:"subview",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return(void 0===r||null===r||r>=this.rows)&&(r=this.rows-t),(void 0===n||null===n||n>=this.cols)&&(n=this.cols-e),new p(this,[t,e,r,n])}},{key:"toArray",value:function(){for(var t=[],e=0;e<this.rows;e++){for(var r=[],n=0;n<this.cols;n++)r.push(this.getVal(e,n));t.push(r)}return t}}]),t}(),p=function(){"use strict";function t(e,r){var n=o(r,4),a=n[0],i=n[1],c=n[2],l=n[3];s(this,t),this._parentMatrix=e,this._rowStart=a,this._colStart=i,this._rowSpan=c,this._colSpan=l}return c(t,[{key:"rows",get:function(){return this._rowSpan}},{key:"cols",get:function(){return this._colSpan}},{key:"getVal",value:function(t,e){var r=this._calcIndexInParent(t,e),n=o(r,2),a=n[0],i=n[1];return this._parentMatrix.getVal(a,i)}},{key:"setVal",value:function(t,e,r){var n=this._calcIndexInParent(t,e),a=o(n,2),i=a[0],s=a[1];return this._parentMatrix.setVal(i,s,r)}},{key:"_calcIndexInParent",value:function(t,e){if(t>=this.rows||e>=this.cols)throw new d.IndexOutOfBounds(t,e);return[this._rowStart+t,this._colStart+e]}},{key:"subview",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return(void 0===n||null===n||n>=this.rows)&&(n=this.rows-e),(void 0===a||null===a||a>=this.cols)&&(a=this.cols-r),e+=this._rowStart,r+=this._colStart,new t(this._parentMatrix,[e,r,n,a])}}]),t}(),h=Object.getOwnPropertyNames(d.prototype),v=Object.getOwnPropertyNames(p.prototype),b=u(h,v).filter((function(t){return!t.startsWith("_")}));b.forEach((function(t){var e=Object.getOwnPropertyDescriptor(d.prototype,t);if("get"in e||"set"in e)throw new Error("未在 MatrixView 中覆盖所有的 getter 和 setter：".concat(t));if(!("value"in e)||!f(e.value))throw new Error("Matrix 中的属性 ".concat(t," 不是一个函数"));p.prototype[t]=function(){var e;return(e=this._parentMatrix)[t].apply(e,arguments)}})),d.IndexOutOfBounds=function(t){"use strict";n(r,t);var e=a(r);function r(t,n){return s(this,r),e.call(this,"矩阵访问越界：[".concat(t,", ").concat(n,"]"))}return r}(i(Error)),t.exports=d},4148:function(t,e,r){var n=r("448a").default,a=r("ed6d").default,i=r("2d0d").default,o=r("970b").default;r("d81d");var s=function t(){"use strict";o(this,t)},c=function(t){"use strict";a(r,t);var e=i(r);function r(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o(this,r),n=e.call(this),n.rows=t.map((function(t){return t instanceof s?t:new l(t)})),n.size=[n.rows.reduce((function(t,e){return t+e.size[0]}),0),Math.max(n.rows[0]&&n.rows[0].size[1]||0,a)],n}return r}(s),l=function(t){"use strict";a(r,t);var e=i(r);function r(t){var a;return o(this,r),a=e.call(this),a.cells=t.map((function(t){return t instanceof s?t:new u(t)})),a.size=[Math.max.apply(Math,n(a.cells.map((function(t){return t.size[0]})))),a.cells.reduce((function(t,e){return t+e.size[1]}),0)],a}return r}(s),u=function(t){"use strict";a(r,t);var e=i(r);function r(t){var n,a=t.val;return o(this,r),n=e.call(this),n.val=a,n.size=[1,1],n}return r}(s);t.exports={TableElement:s,Table:c,Row:l,Cell:u}},"4c93":function(t){t.exports=JSON.parse('{"name":"json5-to-table","version":"0.1.9-preview","description":"JSON 数据转化为表格的工具，支持深层嵌套数据，支持模式定义","main":"lib/index.js","bin":{"json5-to-table":"./bin/json5-to-table"},"repository":"https://github.com/yetrun/json5-to-table","author":"hi@yet.run","license":"Apache-2.0","scripts":{"build":"webpack","test":"ava","prepublishOnly":"rm -r dist && yarn build"},"ava":{"files":["test/**/*.test.js"]},"files":["CHANGELOGS","README.md","LICENSE","bin","dist"],"keywords":["nested","json","table","schema","html","excel","json-to-table"],"devDependencies":{"@babel/core":"^7.15.5","@babel/preset-env":"^7.15.6","ava":"^3.15.0","babel-loader":"^8.2.2","webpack":"^5.51.1","webpack-cli":"^4.8.0","xlsx":"^0.17.1"},"dependencies":{"json5":"^2.2.0","lodash":"^4.17.21","yargs":"^17.1.1"}}')},"4dcf":function(t,e,r){var n=r("ded3").default;r("d81d"),r("b64b"),r("a15b"),r("d3b7"),r("25f0");var a=r("d7bc"),i=a.isObject,o=a.isString,s=a.difference,c=["title","path","props","meta"];function l(t){if(Array.isArray(t))return t.map((function(t){return l(t)}));if(i(t)){var e=s(Object.keys(t),c);if(e.length>0)throw new Error("未知的 schema 键：".concat(e.join(", ")));if(!("path"in t))throw new Error("schema 一定要设置 `path` 值");return"title"in t||(t=n({title:t.path},t)),"props"in t&&(t=n(n({},t),{},{props:l(t.props)})),t}return o(t)?{title:t,path:t}:void 0===t||null===t?t:t.toString()}t.exports=l},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5c96"),i=r.n(a),o=(r("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[r("input",{ref:"fileInput.schema",attrs:{type:"file"}}),r("input",{ref:"fileInput.data",attrs:{type:"file"}})]),r("el-header",{staticClass:"app-header"},[r("span",{staticClass:"left"},[r("el-button",{attrs:{type:"info"},on:{click:t.generateTableHTML}},[t._v("生成")]),r("el-dropdown",{on:{command:t.readFile}},[r("el-button",{attrs:{type:"info"}},[t._v(" 导入 JSON"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"schema"}},[t._v("导入模式文件")]),r("el-dropdown-item",{attrs:{command:"data"}},[t._v("导入数据文件")])],1)],1)],1),r("span",{staticClass:"right"},[r("el-checkbox",{model:{value:t.config.generateSequence,callback:function(e){t.$set(t.config,"generateSequence",e)},expression:"config.generateSequence"}},[t._v("生成序号")])],1)]),r("el-main",{staticClass:"app-main"},[r("splitpanes",[r("pane",{attrs:{size:"33"}},[r("splitpanes",{staticClass:"app-code-pane",attrs:{horizontal:""}},[r("pane",{attrs:{size:"33"}},[r("Panel",{attrs:{title:"Schema",prompt:t.errors.schema,promptType:"error"}},[r("codemirror",{staticClass:"app-codemirror-container",attrs:{options:t.cmOptions},on:{input:function(e){return t.clearValidate("schema")}},model:{value:t.source.schema,callback:function(e){t.$set(t.source,"schema",e)},expression:"source.schema"}})],1)],1),r("pane",[r("Panel",{attrs:{title:"Data",prompt:t.errors.data,promptType:"error"}},[r("codemirror",{staticClass:"app-codemirror-container",attrs:{options:t.cmOptions},on:{input:function(e){return t.clearValidate("data")}},model:{value:t.source.data,callback:function(e){t.$set(t.source,"data",e)},expression:"source.data"}})],1)],1)],1)],1),r("pane",[r("Panel",{attrs:{title:"Table"}},[r("div",{staticClass:"table-container"},[t.table.html?r("div",{domProps:{innerHTML:t._s(t.table.html)}}):r("el-empty",{attrs:{description:"请点击导航栏上的生成按钮生成表格"}})],1),t.table.summary?r("el-tooltip",{attrs:{slot:"prompt",effect:"dark",content:"内核耗时指生成表格 HTML 源码的时间，剩下的耗时是加载 DOM 所花费的时间",placement:"top-start"},slot:"prompt"},[r("span",[t._v(" 数据总量 "+t._s(t.table.summary.dataCount)+" 个， 内核运行耗时 "+t._s(t.table.summary.timeConsuming)+" ms ")])]):t._e()],1)],1)],1)],1)],1)}),s=[],c=r("3835"),l=(r("d81d"),r("fb6a"),r("a15e")),u=r("25d5"),f=r("512e"),d=(r("c1ea"),r("8f94")),p=(r("a7be"),r("f9d4"),r("8c2e"),r("7ba3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-panel",staticStyle:{height:"100%"}},[r("el-tabs",{staticStyle:{height:"100%"},attrs:{type:"border-card"}},[r("el-tab-pane",[r("span",{staticClass:"app-panel-title",attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.title)+" ")]),r("div",{staticStyle:{height:"100%"}},[t._t("default")],2)]),t.prompt?r("el-tab-pane",{attrs:{disabled:""}},[r("span",{style:{color:t.promptColor},attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.prompt))])]):t._e(),t.$slots.prompt?r("el-tab-pane",{attrs:{disabled:""}},[r("template",{slot:"label"},[t._t("prompt")],2)],2):t._e()],1)],1)}),h=[],v={name:"Panel",props:{title:String,prompt:String,promptType:{type:String,default:"info"}},computed:{promptColor:function(){return"error"===this.promptType?"red":void 0}}},b=v,m=(r("f7ca"),r("2877")),y=Object(m["a"])(b,p,h,!1,null,null,null),w=y.exports,g=function(t,e,r){try{e&&JSON.parse(e),r()}catch(n){if(!(n instanceof SyntaxError))throw n;r(new Error("JSON 格式错误"))}},S=new l["default"]({schema:[{validator:g,trigger:"none"}],data:[{required:!0,message:"请输入 Data 内容",trigger:"none"},{validator:g,trigger:"none"}]});function x(t,e){return Array.isArray(t)||(t=[t]),t=t.map((function(t,e){return Object.assign({},{_seq:e+1},t)})),e=e.slice(),e.unshift({title:"序号",path:"_seq"}),[t,e]}var _={name:"App",components:{Splitpanes:f["Splitpanes"],Pane:f["Pane"],codemirror:d["codemirror"],Panel:w},data:function(){return{cmOptions:{tabSize:2,mode:"text/javascript",theme:"darcula",lineNumbers:!0,line:!0},table:{html:"",summary:null},source:{data:JSON.stringify([{a:1,b:2},{a:3,b:4}]),schema:""},errors:{data:null,schema:null},rules:{schema:[{validator:g,trigger:"none"}],data:[{required:!0,message:"请输入 Data 内容",trigger:"none"},{validator:g,trigger:"none"}]},config:{generateSequence:!1}}},mounted:function(){var t=this;this.$refs["fileInput.data"].addEventListener("change",(function(e){return t.setFileContent("data",e)}),!1),this.$refs["fileInput.schema"].addEventListener("change",(function(e){return t.setFileContent("schema",e)}),!1)},methods:{readFile:function(t){var e="fileInput.".concat(t);this.$refs[e].click()},setFileContent:function(t,e){var r=this,n=e.target.files,a=n[0],i=new FileReader;i.onload=function(e){var n=e.target.result;r.source[t]=n},i.readAsText(a)},generateTableHTML:function(){var t=this,e=Date.now();S.validate(this.source,(function(r,n){try{if(n)t.errors={schema:n.schema&&n.schema[0].message,data:n.data&&n.data[0].message};else{var a=t.source.data&&JSON.parse(t.source.data),i=t.source.schema&&JSON.parse(t.source.schema);if(i||(i=Object(u["parseDataToSchema"])(a),t.source.schema=JSON.stringify(i,null,2)),t.config.generateSequence){var o=x(a,i),s=Object(c["a"])(o,2);a=s[0],i=s[1]}t.table.html=Object(u["generateHTMLTable"])(a,i,{attributes:{table:{class:"beautiful-table"}}}),t.table.summary={dataCount:a.length||1,timeConsuming:Date.now()-e}}}catch(l){throw console.error(l),l}}))},clearValidate:function(t){this.errors[t]=null}}},O=_,j=(r("5c0b"),Object(m["a"])(O,o,s,!1,null,null,null)),k=j.exports;r("e008");n["default"].config.productionTip=!1,n["default"].use(i.a),new n["default"]({render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"6f5d":function(t,e,r){var n=r("6374").default,a=r("7609");function i(t,e){if("size"in t||(t=a(t)),Array.isArray(t)){var r,o=0,s=n(t);try{for(s.s();!(r=s.n()).done;){var c=r.value,l=i(c,e.subview(0,o));o+=l}}catch(d){s.e(d)}finally{s.f()}return o}var u=Math.ceil(e.rows/t.size[0]),f=1;return t.props&&(f=i(t.props,e.subview(u,0))),""!==t.title&&e.setVal(0,0,{val:t.title,rowSpan:u,colSpan:f}),f}t.exports=i},7609:function(t,e,r){var n=r("ded3").default,a=r("448a").default;function i(t){if(Array.isArray(t)){var e=t.map((function(t){return i(t)}));return e.size=[Math.max.apply(Math,a(e.map((function(t){return t.size[0]})))),e.map((function(t){return t.size[1]})).reduce((function(t,e){return t+e}),0)],e}var r=""===t.title?0:1;if(t.props){var o=i(t.props);return t=Object.assign({},t),t.props=o,t.size=[r+o.size[0],o.size[1]],t}return n(n({},t),{},{size:[r,1]})}r("d81d"),t.exports=i},9926:function(t,e,r){var n=r("448a").default,a=r("278c").default;r("d81d"),r("4fad"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0");var i=r("d7bc"),o=i.isObject,s=i.flatten;function c(t){var e=l(t);return e.map((function(t){return{title:t,path:t}}))}function l(t){var e=[];return Array.isArray(t)?e=t.map((function(t){return l(t)})):o(t)&&(e=Object.entries(t).map((function(t){var e=a(t,2),r=e[0],n=e[1];if(o(n)){var i=l(n);return i.map((function(t){return r+"."+t}))}return r}))),n(new Set(s(e)))}t.exports=c},"9c0c":function(t,e,r){},c247:function(t,e,r){var n=r("448a").default;r("d81d");var a=r("39af");t.exports=function t(e,r){if(Array.isArray(e)){var i=e.map((function(e){return t(e,r)}));return[i.map((function(t){return t[0]})).reduce((function(t,e){return t+e}),0),r.size[1]]}if(Array.isArray(r)){var o=r.map((function(r){return t(e,r)}));return[Math.max.apply(Math,n(o.map((function(t){return t[0]})))),o.map((function(t){return t[1]})).reduce((function(t,e){return t+e}))]}if(r.props){var s=a(e,r.path);return t(s,r.props)}if(1!==r.size[1])throw new Error("遇到断言错误：标量数据的 schema size 应为 [1, 1]");return[1,1]}},d3b2:function(t,e,r){var n=r("6374").default,a=r("ded3").default,i=r("278c").default,o=r("970b").default,s=r("5bc3").default;r("a15b"),r("4de4"),r("cb29"),r("d3b7"),r("25f0"),r("99af"),r("d81d"),r("4fad");var c=r("29da"),l=["table","thead","tbody","tr","thead.tr","tbody.tr","th","td"],u=function(){"use strict";function t(){o(this,t),this.indent=0,this.lines=[]}return s(t,[{key:"begin",value:function(t,e){var r=[t,v(e)].filter((function(t){return t})).join(" "),n="<".concat(r,">");this.write(n),this.indent++}},{key:"end",value:function(t){this.indent--;var e="</".concat(t,">");this.write(e)}},{key:"write",value:function(t){t=new Array(2*this.indent).fill(" ").join("")+t,this.lines.push(t)}},{key:"toString",value:function(){return this.lines.join("\n")}}]),t}();function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.reduce((function(e,r){return e[r]=t[r],e}),{})}function d(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new u,a=c(t,e,r),i=f(r.attributes);return n.begin("table",i.table),p(n,a.header,["thead","tr","th"],i),p(n,a.body,["tbody","tr","td"],i),n.end("table"),n.toString()}function p(t,e,r,o){var s=i(r,3),c=s[0],l=s[1],u=s[2],f=a(a({},o[l]),o["".concat(c,".").concat(l)]);t.begin(c,o[c]);var d,p=n(e);try{for(p.s();!(d=p.n()).done;){var v=d.value;t.begin(l,f);var b,m=n(v);try{for(m.s();!(b=m.n()).done;){var y=b.value;void 0!==y&&t.write(h(y,u,o[u]))}}catch(w){m.e(w)}finally{m.f()}t.end(l)}}catch(w){p.e(w)}finally{p.f()}t.end(c)}function h(t,e,r){var n={};t.rowSpan>1&&(n.rowSpan=t.rowSpan),t.colSpan>1&&(n.colSpan=t.colSpan);var i=[e,v(a(a({},n),r))].filter((function(t){return t})).join(" ");return"<".concat(i,">").concat(b(t.val),"</").concat(e,">")}function v(t){return void 0===t||null===t?"":Object.entries(t).map((function(t){var e=i(t,2),r=e[0],n=e[1];return"".concat(r,'="').concat(n,'"')})).join(" ")}function b(t){return void 0===t||null===t?"":t.toString()}t.exports=d},dbff:function(t,e,r){var n=r("6374").default,a=r("4082").default,i=["writeTo"];r("99af");var o=r("29da"),s=function(){try{return r("487e")}catch(t){throw new Error("生成 Excel 需要引入工具包 js-xlsx:\n\n        yarn add xlsx\n        npm install xlsx\n    ")}};function c(t,e,r){var n=r.writeTo,c=a(r,i),u=s(),f=o(t,e,c),d=l(f),p={SheetNames:["Sheet 1"],Sheets:{"Sheet 1":d}};u.writeFile(p,n)}function l(t){var e=s(),r={"!merges":[]},n=u(t.header,r),a=u(t.body,r),i=n[0]+a[0],o=n[1]+a[1],c=e.utils.encode_cell({r:0,c:0}),l=e.utils.encode_cell({r:i-1,c:o-1});return r["!ref"]="".concat(c,":").concat(l),r}function u(t,e){var r,a=s(),i=0,o=0,c=n(t);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(i++,0===o)o=l.length;else if(o!=l.length)throw new Error("断言失败：每一行的列数应该相等");var u,f=n(l);try{for(f.s();!(u=f.n()).done;){var d=u.value;if(void 0!==d){var p=a.utils.encode_cell({r:d.row-1,c:d.col-1});e[p]={v:d.val},(d.rowSpan>1||d.colSpan>1)&&e["!merges"].push({s:{r:d.row-1,c:d.col-1},e:{r:d.row+d.rowSpan-2,c:d.col+d.colSpan-2}})}}}catch(h){f.e(h)}finally{f.f()}}}catch(h){c.e(h)}finally{c.f()}return[i,o]}t.exports=c},df2f:function(t,e,r){},e008:function(t,e,r){},e55b:function(t,e,r){r("d81d");var n=r("4148"),a=n.Table,i=n.Row,o=n.Cell,s=r("7609"),c=r("39af");function l(t,e){if("size"in e||(e=s(e)),Array.isArray(t))return new a(t.map((function(t){return l(t,e)})),e.size[1]);if(Array.isArray(e))return new i(e.map((function(e){return l(t,e)})));var r=c(t,e.path);return e.props?l(r,e.props):new o({val:r})}t.exports=l},f548:function(t,e,r){var n=r("6374").default,a=r("4148"),i=a.Table,o=a.Row,s=a.Cell,c=r("e55b");function l(t,e,r){var n=c(t,e);u(n,r)}function u(t,e){if(t instanceof i){var r,a=Math.floor(e.rows/t.size[0]),c=0,l=n(t.rows);try{for(l.s();!(r=l.n()).done;){var f=r.value,d=f.size[0]*a;u(f,e.subview(c,0,d)),c+=d}}catch(w){l.e(w)}finally{l.f()}c<e.rows&&e.setVal(c,0,{val:void 0,rowSpan:e.rows-c,colSpan:t.size[1]})}else if(t instanceof o){var p,h=t,v=0,b=n(h.cells);try{for(b.s();!(p=b.n()).done;){var m=p.value;u(m,e.subview(0,v)),v+=m.size[1]}}catch(w){b.e(w)}finally{b.f()}}else{if(!(t instanceof s))throw new Error("table 参数类型异常");var y=t;e.setVal(0,0,{val:y.val,rowSpan:e.rows,colSpan:1})}}t.exports=l},f7ca:function(t,e,r){"use strict";r("df2f")}});
//# sourceMappingURL=app.f54c6181.js.map