#### 使用 jQuery 和使用框架的区别

- 数据和视图分离
  - jQuery 的数据和视图混在 js 中，如插入 DOM 节点
  - vue 不直接操作 Dom 节点，修改的只是关键数据
- 以数据驱动视图，只关心数据变化，DOM 操作被封装 
  - 视图由数据生成，改变数据，视图变化，而不是直接修改 DOM



#### 如何理解 MVVM

- M 是 model ，处理数据源   =>   data

- V 是 view，提高视图   =>   template

- VM 是 控制器，修改数据源提供给视图 ，是 View 和 Model 之间的桥    =>   vm

  

  View  =>  ViewModel  => Model     DOMListen

  Model  => ViewModel  => View	    DataBinds



####  Vue 中如何实现响应式

- 响应式是修改 data 属性之后，vue 立刻监听到

- Object.defineProperty

```js
var obj = {};		声明一个空对象，在 Object.defineProperty 中给对象添加监听属性
var _name = "hello"

Object.defineProperty(obj, "name", {
    get:function(){
        return _name;
    },
    set:function(newValue){
        _name = newValue
    }
})

Object.defineProperty 函数是在调用的时候才会触发，所以当用 for 去绑定的时候，会存在闭包的问题
```

- 将 data 的属性代理到 vm 上



#### Vue 中如何解析模板

- 模板是一段字符串，模板最终要转换成 JS 代码，渲染 HTML 和逻辑，render 函数

render 函数

```js
with(this){
    return _c(
    	'div',	//元素
        {attrs:{id:"app"}},	//属性
        [
          _c(
          	'p',
           	[
              _v(_s(price))       
            ]
          )
        ]	//子元素
    )
}
```



snabbdom



#### Vue 的整个实现流程 

- 解析模板成 render 函数 
  - 相当于 h 函数
  - 使用 with(this)
  - 返回的是 vnode 
- 响应式开始监听 
  - 双向绑定是通过监听数据的变化，在 set 时执行 render 达到数据的双向绑定
  - 将 data 的属性代理到 vm 上，在 render 中就可以通过 this 去调用了
  - 为什么要 get ？假如 data 中的属性没被调用，重复的 set 会带来不必要的性能损失
- 首次渲染，显示页面，且绑定依赖 
  - 初次渲染，执行 updateComponent ，执行 vm.render() 相当于 patch 的第一次执行
  - 执行 render 函数，回访问到 vm.list 和 vm.title，data 属性已经被挂载到 vm 
- data 属性变化，触发 render 
  - 监听到 data 的 set ，执行 updateComponent，重新执行  render 函数，生成 vnode 和 prevVnode，通过 patch 对比渲染到页面



















