## 目录结构

```
├── assets        // 静态文件
│   ├── img       // 图片
│   ├── styles    // 样式
├── common        // 公共函数
├── libs          // 第三方库
├── pages         // html页面目录
```
## 添加页面

在`pages`文件夹下复制现有html文件后重命名即可

## 部署

无需编译，直接部署。

**部署时需要保证文件目录结构相同**，因为代码中的路径都使用的是相对地址

## 页面内容

可进行数据差值替换的部分是`<script id="template" type="text/html"></script>`之间的内容，页面所有元素都应位于这个标签内部

在页面最底部的`<script>`内部进行数据的差值替换，要嵌套调换的字段都定义在`nestedData`对象中，在`getData()`方法获取接口数据后的`then`方法中，从返回结果`res`中取值赋给`nestedData`对象对应字段

## 模板语法

模板中的所有变量都是定义在`nestedData`对象中的属性。

基本语法：
```
let nestedData = { 
  type: 'a',
  color: ['red', 'green'],
  pic: [
    {id: 1, name: 'aa'},
    {id: 2, name: 'bb'},
  ]
  
}
// 取值
{{type}}

// 数组循环
{{#color}}
  {{.}}
{{/color}}

// 数组对象循环
{{#pic}}
  {{id}}
  {{name}}
{{/pic}}
```
更多的参考[文档](https://github.com/janl/mustache.js)。



