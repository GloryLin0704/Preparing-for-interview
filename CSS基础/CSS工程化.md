#### PostCss 

- import 模块合并
- autoprefixier 自动加前缀
- cssnano 压缩代码
- cssnext 使用CSS新特性
- precss 变量、mixin、循环等



#### Webpack

- JS 是整个应用的核心入口
- 一切资源均由 JS 管理依赖
- 一切资源均由 webpack 打包



```js
webpack src/main.js  build/main.js
```



css-loader：将 CSS 转成 JS

style-loader：将 JS 样式插入到页面中

css modules：解决 CSS 命名冲突的问题

ExtractTextPlugin：将 CSS 从 JS 中提取出来