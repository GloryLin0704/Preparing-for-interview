#### 如何检测浏览器的类型，拆解 url 各部分

* navigator
* screen
* location
* history

---

```js
var ua = navigator.userAgent	//获取浏览器的属性

screen.width		//屏幕宽度
screen.height		//屏幕高度

location.href		//获取 url
location.protocal	//协议
location.host		//域名
location.pathname	//路径
location.search		//url 中 ? 的部分
location.hash		//url 中 # 的部分

history.back()		//返回
history,forward()	//前进
```

