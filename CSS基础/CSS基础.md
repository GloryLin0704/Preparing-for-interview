### 选择器

#### 浏览器查找选择器

浏览器对 style 选择器的分析是从右到左，目的是节省性能



#### 选择器分类 

```css
伪元素 ::before{}
伪类 :hover{}
属性选择器 [type=radio]{}
```



#### 选择器权重

- id 选择器 	 +100
- 类 属性 伪类    +10
- 元素 伪元素     +1
- 其他选择器      +0

------



- !important 优先级最高
- 计算权重时，不进位
- 内联元素属性 优先级高
- 相同权重 后写的生效 



### 图片

#### base64 的使用

图片可以转换成 base64 用在css中显示，填在 background 的 url( base64 )

- 用于减少 HTTP 请求
- 适用于小图片，大图片 base64 太大
- base64 的体积约为原图的 4/3



- 增大了css的大小
- 增加了浏览器的解密开销



#### 伪类和伪元素的区别

- 伪类是一种状态，如点击，鼠标放在元素上
- 伪元素是真的有这个元素
- 伪类是单冒号，:hover；后者是双冒号，::before



#### 字体

- 字体族：serif sans-serif monospace  写的时候不用加引号，代表一类字体
- 多字体，fallback，具体的字体型号，第一个没有就查找下一个
- 引用网络字体和自定义字体

```css
@font-face{
    font-family:"name",
    src:url("xxx")
}
```



#### 行内元素

inline 的行高分为 顶线、底线、基线，默认情况下文字是按照基线对齐的，行高最后由行内元素中最后的一个撑起来

`vertical-align` 的 top 和 bottom 对齐的是顶线和底线



#### 图片底部 3px 的空隙

img 是 inline 元素，是按照基线对齐的，不是底线，所有会有空隙，根据字体的大小来定，baseline

处理方法：

```css
vertical-align:bottom
display:block
```



#### 雪碧图

将多个图标放在用个图片上

使用 background 加载，通过 background-position 去移动

减少 HTTP 请求



### 边框

#### 用边框做三角形

主要是 border 的衔接部分是对半开的，让衔接的边框透明



#### 文字折行

- overflow-wrap 通用换行控制，是否保留单词
- word-break      以单词或者句子或者不管任何来换行
- white-space     空白处是否断行

