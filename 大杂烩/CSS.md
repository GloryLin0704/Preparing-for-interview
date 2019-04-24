#### 不知宽高的水平垂直居中

**一、table + cell-table + vertical-align** 

- 显示设置父元素为：table，子元素为：cell-table
- 设置了 table 和 cell-table 之后，加上 vertical-align: middle 垂直就自然居中了
- 然后就是 text-align: center，就水平居中了

```css
.parent1{
    display: table;
    height:300px;
    width: 300px;
    background-color: #FD0C70;
}
.parent1 .child{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    font-size: 16px;
}
```



**二、新增一个 span 标签，width:0; vertical-align: middle 设置基线让后面的元素对齐**

```css
.parent2{
    height:300px;
    width: 300px;
    text-align: center;
    background: #FD0C70;
}
.parent2 span{
    display: inline-block;;
    width: 0;
    height: 100%;
    vertical-align: middle;
    zoom: 1;
}
.parent2 .child{
    display: inline-block;
    color: #fff;
    zoom: 1;
}
```



**三、绝对定位**

- 子元素绝对定位，距离顶部 50%，左边50%，然后使用css3 



**四、flex 布局 ** 

```css
.parent4{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height:300px;
    background: #FD0C70;
}
.parent4 .child{
    color:#fff;
}
```



#### 知道宽高

```
.father{   
position: relative;
} 
.child{   
position: absolute;   
top: 50%;   
left: 50%;   
margin: -150px 0 0 -150px; 
} 
/* 或者 */ 
.child{   
position: absolute;   
left: 0;   
top: 0;    
right: 0;    
bottom: 0;   
margin: auto; 
}
```



#### margin折叠(撑开父元素位置，合并相邻元素margin)

**1、子元素的父元素的间距问题(margin 在第一个元素设置的时候会把父元素顶下来)：**

- 在父层div加上：overflow:hidden；
- 把margin-top外边距改成padding-top内边距;

- 设置父元素或子元素浮动（left/right）
- 设置父元素dispaly:inline-block或者display:table-cell;
- 给父元素加上绝对定位



**2、相邻元素之间的 margin(相邻元素的margin会合并，保留大的)：**

- 给最后面的元素加上浮动（left/right）

- 给最后一个元素加上display:inline-block;

- 但是IE6和IE7下不完全支持display:inline-block，所以要加上*display:inline;zoom:1



#### 清除浮动

- 给父级 div 定义伪元素：after和zoom

  ```js
  .clearfloat:after {
      display: block;   
      clear: both;
      content: "";
  ------------------关键代码  
      visibility: hidden;
      height: 0;
  }
  
  .clearfloat {
      zoom: 1;
  }      
  -------------- 兼容 IE6，7
  ```

  

- 在结尾处添加空div标签clear:both
- 给父级 div 定义 height
- 给父级 div 定义 overflow:hidden

  - 不能和position配合使用，因为超出的尺寸的会被隐藏
- 给父级 div 定义 overflow:auto

  - 不能定义height，内部宽高超过父级div时，会出现滚动条



#### 常见的块级元素和行内元素

- 行内元素有：title lable span br a em b i strong

- 块级元素有：body form select textarea h1-h6 table button hr p ol ul dl div
- 行内块元素常见的有： img input td



#### CSS的优先级【class，id，内联，!important】

```js
!important > 行内样式1000 > ID选择器100 > 类选择器10 > 标签1 > 通配符 > 继承 > 浏览器默认属性
```

- 内联样式表的权值为 1000，就是在元素内写style
- ID 选择器的权值为 100
- Class 类选择器的权值为 10
- HTML 标签选择器的权值为 1

- 通用选择器（*），子选择器（>）和相邻同胞选择器（+），他们的权值是0



#### 对inline元素设置padding、margin有效吗？

- inline元素设置width和height无效
- 设置margin-left、margin-right、padding-left、padding-right有效
- 设置margin-top、margin-bottom、padding-top、padding-bottom无效

左右有，上下无



#### BFC

- 指页面上一个渲染区域，里面的元素按文档流中的顺序垂直排列，并且发生垂直方向上的margin折叠，同时这个区域内的元素布局不会对外面的元素有任何影响

- float属性取值不是“none”
- overflow属性取值不是“visible”
- display的值为 “table-cell”, “table-caption”, or “inline-block”中的任何一个
- position的值不为 “static” 或 “relative”中的任何一个



#### link 和 import 的区别

- 差别1：老祖宗的差别，link属于XHTML标签，而@import完全是css提供的一种方式。

  link标签除了可以加载css外，还可以做很多其他的事情，比如定义RSS，定义rel连接属性等，@import只能加载CSS。

- 差别2：加载顺序的差别：当一个页面被夹在的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再加载。所以有时候浏览@import加载CSS的页面时会没有样式（就是闪烁），网速慢的时候还挺明显。

- 差别3：兼容性的差别。由于@import是CSS2.1提出的所以老的浏览器不支持，@import只有在IE5以上的才能识别，而link标签无此问题，完全兼容。



#### CSS中opacity=0,visibility=hidden,display=none

- `opacity=0`  该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的
- `visibility=hidden`  该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
- `display=none`  把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样



#### 字体小于12px

 Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示

解决方法：可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决



#### 三栏布局

