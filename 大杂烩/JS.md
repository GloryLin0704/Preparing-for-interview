#### 作用域

作用域就是有它自身的上下文区域(比如函数内),内部会有变量声明提升,函数声明提升这些;

函数声明提升优于变量声明提升..

作用域有全局作用域和块级作用域(局部,比如用 let 或者单纯花括号的);

作用域会影响`this`的指向



#### setTimeout、setInterval和requestAnimationFrame之间的区别

- setInterval是基于时间的，而requestAnimationFrame是基于帧数的



#### nodeType 

属性可返回节点的类型

元素element 1
属性attr 2
文本text 3
注释comments 8
文档document 9