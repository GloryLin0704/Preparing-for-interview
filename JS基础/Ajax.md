#### 如何手动编写 Ajax，不依赖第三方库



xhr.readyState的状态值

* 0 - (未初始化)  还没有调用 
* 1 - (载入)          已调用send()方法，正在发送请求
* 2 - (载入完成)  send()方法执行完成，已经接收到全部响应内容
* 3 - (交互)          正在解析响应内容
* 4 - (完成)          响应内容解析完成，可以在客户端调用了

---



```js
var xhr = new XMLHttpRequest();

xhr.open('GET', "/api", true)
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.resphoneText)
        }
    } 
}

xhr.send(null)
```



#### 跨域的实现方式

1、jsonp

2、后台设置 http header



> 同源策略

同协议、同域名、同端口 



所有的跨域请求都必须经过信息提供方允许



> 有三个标签允许跨域加载资源

* `<img src = xxx>`
* `<link href = xxx>`
* `<script src = xxx>`



---

#### jsonp 原理

因为浏览器不会拦截 `script` 标签的引入，所以引入 `script` 标签请求某个 url ，让后台在对应的 url 中做处理，并讲结果通过 `callback` 的形式返回给前端



```html
<script>
    window.callback = function(data){
        console.log(data)
    }
</script>

<script src="http://xxx/api.js"></script>
```







