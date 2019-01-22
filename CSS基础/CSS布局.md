#### flexbox

- 弹性盒子
- 盒子本来就是并列的
- 指定宽度即可



#### float

- 元素”浮动“
- 脱离文档流
- 不脱离文本流

对自身的影响

- 形成”块“（BFC）
- 位置尽量靠上
- 位置尽量靠左（右）

  

 #### 浮动带来的影响

浮动元素会使父元素的高度塌陷，比如原本需要由这几个元素撑起来的高度，由于元素是 float ，导致脱离文档流，无法撑起预想中的高度，所以导致父元素高度塌陷。

清除浮动

```css
.parent{
    overflow:auto/hidden
}

.parent::after{
    content:"",
    clear:both, //保证左右两边没有浮动元素
    display:block,
    height:0
}
```



#### inline-block 的间隙

来自 html 代码中的空白区域，将 font-size 置 0



#### 响应式设计和布局

主要方式：

- 隐藏 + 折行 + 自适应空间
- rem / viewport / media query 



```css
<meta name="viewport" content="width=320">
```



```css
@media (max-width:375px){
    html{
        
    }
}
大的放上面，下的放下面
```



#### 实现两栏（三栏）布局

- 表格布局
- float + margin 布局
- inline-block 布局
- flexbox 布局 

















