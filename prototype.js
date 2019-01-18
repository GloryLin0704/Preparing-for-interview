function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(this.name);
    return;
};

function FrontEnd(job) {
    this.job = job;
}

FrontEnd.prototype = new Person();

function Elem(id) {
    this.elem = document.getElementById(id);
    return this;
}

Elem.prototype.html = function(val) {
    var elem = this.elem;
    if (val) {
        elem.innerHTML = val;
        return;
    } else {
        return elem.innerHTML;
    }
};

var div = new Elem("div");
div.html('<p>Hello World</p>')