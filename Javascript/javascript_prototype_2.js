//整理自JavaScript面向对象编程指南（第2版）
//扩展内建对象
1. --介绍
在 JavaScript 中，内建对象的构造器函数（例如 Array、String、Object 和Function）都是可以通过其原型来进行扩展的。
这意味着我们可以做一些事情，例如只要往数组原型中添加新的方法，就可以使其在所有的数组可用
e.g.
假设我们的应用程序需要一个反转字符串的功能，并且也觉得 String 对象应该有一个 reverse()方法，毕竟 Array 对象是有 reverse()方法的。
其实，在 String 的原型中添加一个 reverse()方法也很容易，我们可以借助于Array.prototype. reverse()方法
String.prototype.reverse = function() {
  return Array.prototype.reverse.
  apply(this.split('')).join('');
}
在这段代码中，我们实际上是先利用 split()方法将目标字符串转换成数组，
然后再调用该数组的 reverse()方法产生一个反向数组。
最后通过 join()方法将结果数组转换为字符串。
> "bumblebee".reverse();
"eebelbmub"

2. --原型陷阱
在处理原型问题时，我们需要特别注意以下两种行为：
当我们对原型对象执行完全替换时，可能会触发原型链中某种异常（exception）。
prototype.constructor 属性是不可靠的。
e.g.
> function Dog() {
this.tail = true;
}
> var benji = new Dog();
> var rusty = new Dog();

> Dog.prototype.say = function(){
    return 'Woof!';
  };
这样，上面的两个对象都可以访问该新方法了：
> benji.say();
"Woof!"
> rusty.say();
"Woof!"

如果我们检查一下这些对象构造器函数，就会发现一切正常。
> benji.constructor === Dog;
true
> rusty.constructor === Dog;
true

现在，我们用一个自定义的新对象完全覆盖掉原有的原型对象：
> Dog.prototype = {
paws: 4,
hair: true
};

事实证明，这会使原有对象不能访问原型的新增属性，它们依然通过那个神秘的链与原有的原型对象保持联系。
> typeof benji.paws;
"undefined"
> benji.say();
"Woof!"
> typeof benji.__proto__.say;
"function"
> typeof benji.__proto__.paws;
"undefined

而我们之后创建的所有对象使用的都是被更新后的 prototype 对象。
> var lucy = new Dog();
> lucy.say();
TypeError: lucy.say is not a function
> lucy.paws;
4

并且，其秘密链接__proto__也指向了新的 prototype 对象：
> typeof lucy.__proto__.say;
"undefined"
> typeof lucy.__proto__.paws;
"number"

但这时候，新对象的 constructor 属性就不能再保持正确了，原本应该是 Dog()的引用却指向了 Object()。
> lucy.constructor;
function Object(){[native code]} 
> benji.constructor;
function Dog(){
this.tail = true;
}

当然，我们可以通过重新设置 constructor 属性来解决上述所有的异常行为：
> function Dog() {}
> Dog.prototype = {};
> new Dog().constructor === Dog;
false
> Dog.prototype.constructor = Dog;
> new Dog().constructor === Dog;
true 
