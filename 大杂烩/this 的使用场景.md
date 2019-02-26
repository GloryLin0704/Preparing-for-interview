#### 一：全局 & 调用普通函数

```js
console.log(this === window);     //true

var x = 10;
function foo(){
    console.log(this);     //Window
    console.log(this.x);   //10
}
foo();
```

- 普通函数在调用时候(注意不是构造函数，前面不加 new)，其中的 this 也是指向 window。




#### 二：构造函数

```js
function Foo(){
    this.x = 10;
    console.log(this);    //Foo {x:10}
}
var foo = new Foo();
console.log(foo.x);      //10
```

- 如果函数作为构造函数使用，那么其中的 this 就代表它即将 new 出来的对象。

- 但是如果直接调用 Foo 函数，而不是 new Foo()，那就变成情况1，这时候 Foo() 就变成普通函数。



#### 三：对象方法

```js
var obj = {
    x: 10,
    foo: function () {
        console.log(this);        //Object
        console.log(this.x);      //10
    }
};
obj.foo();
```

- 函数作为对象的方法时，方法中的 this 指向该对象。

- **若是在对象方法中定义函数，那么情况就不同了。**

```js
var obj = {
    x: 10,
    foo: function () {
        function f(){
            console.log(this);      //Window
            console.log(this.x);    //undefined
        }
        f();
    }
}
obj.foo(); 
```



- 如果 foo 函数不作为对象方法被调用

```js
var obj = {
    x: 10,
    foo: function () {
        console.log(this);       //Window
        console.log(this.x);     //undefined
    }
};
var fn = obj.foo;
fn();
```

- obj.foo 被赋值给一个全局变量，并没有作为 obj 的一个属性被调用，那么此时 this 的值是 window。



#### 四：构造函数 prototype 属性

```js
function Foo(){
    this.x = 10;
}
Foo.prototype.getX = function () {
    console.log(this);        //Foo {x: 10, getX: function}
    console.log(this.x);      //10
}
var foo = new Foo();
foo.getX();
```

- 在 Foo.prototype.getX 函数中，this 指向的 foo 对象。不仅仅如此，即便是在整个原型链中，this 代表的也是当前对象的值。



#### 五：函数用 call、apply或者 bind 调用。

- 当一个函数被 call、apply 或者 bind 调用时，this 的值就取传入的对象的值。



#### 六：DOM event this











#### 七：箭头函数中的 this

- 箭头函数内部的 this 是词法作用域，由上下文确定。
- 一般是跟随包裹箭头的第一个正常函数，或者是全局

- 由于 this 在箭头函数中已经按照词法作用域绑定了，所以，用 call()或者 apply()调用箭头函数时，无法对 this 进行绑定







