#### DOM 是哪种基本的数据结构

树结构



新增节点，插入节点

获取父元素

获取子元素

删除节点 

---

```js
var p = document.createElement('p')
p.innerHtml = 'new p'
var div = document.getElementById('div1')
div.appendChild(p)

div.parentElement			获取父元素
div.childNodes				获取子元素
div.childNodes.nodeType		节点类型，数值
div.childNodes.nodeName		节点名
div.removeChild('p')		删除节点
```



#### DOM 操作的常用 API 有哪些，DOM 节点的 attr 和 property 有何区别

```js
var oP = document.querySelector('p') 
// property	操作的是 DOM 上的对象属性
oP.style.width = ''
oP.className = ''

//attribute	操作的是 DOM 标签上的属性
oP.getAttribute('style')
oP.setAttribute('style', 'width:200px')

```







