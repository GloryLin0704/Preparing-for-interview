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

































