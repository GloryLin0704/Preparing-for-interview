#### 网页

- HTML        是结构
- CSS            是样式

- Javascript  是行为



适配移动端第一步

<mete name="viewport" xxxx> 

```html
a[href, target]

img[src, alt]

table td[colspan, rowspan]
colspan => 列，rowspan => 行

form[target, method, enctype]

input[type, value]

button[type]

select > option [value]

label[for]
和 radio 配合，点击文字可以选择
```



#### 语义化标签

使页面结构更明确，有利于爬虫SEO

```html
header	头部
footer 	底部
section	分区
article	文章
nav		导航
aside	
```



#### 语义化的意义

- 开发者容易理解
- 机器容易理解结构
- 有助于SEO
- semantic microdata



#### HTML元素分类

按默认样式分

* block 块级
* inline 行内
* inline-block 行内块级



#### HTML元素嵌套关系

- 块级元素可以包含行内元素
- 块级元素不一定能包含块级元素，如 p 不能包含 div
- 行内元素一般不能包含块级元素

a 可以包含 div，在检查嵌套关系的时候，a 标签相当于是一个透明的东西；content model

但 p 不能包含  div，在 p 的 content model 中不允许包括 div 



#### 默认样式

HTML 自带一些默认样式，浏览器默认加的

Normalize.css  重重样式



#### DOCTYPE 的意义

- 让浏览器以标准模式渲染
- 让浏览器知道元素的合法性



#### HTML5 的变化

- 新的语义化元素
- 表单验证增强
- 新的API（音视频，本地存储，图形，离线）
- 分类和嵌套变更，a 元素可包含 div 



#### HTML 和 DOM 的关系

- HTML 是固定的
- DOM由HTML解析而来的
- JS可以维护DOM



#### property 和 attribute 的区别

- property 是活的
- attribute 是死的

在 控制台 中可以直接修改元素的 property，attribute 是HTML标签中赋的值，二者互相不影响































































