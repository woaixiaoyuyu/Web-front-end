//整理自JavaScript面向对象编程指南（第2版）
//prototype
据说是JS的核心，如果要开发前端，开发JS相关的话必须会，JS没有class，但是有prototype，好与不好自行评判
1. --利用原型添加方法与属性 
我们来构建一个具体的构造器函数 Gadget()，看看它究竟是如何在新建对象
时为其添加属性与方法的。
function Gadget(name, color) {
 this.name = name;
 this.color = color;
 this.whatAreYou = function(){
 return 'I am a ' + this.color + ' ' + this.name;
 };
}
当然，添加属性和方法还有另一种方式，即通过构造器函数的 prototype 属性来增加该构造器所能提供的功能。
下面就让我们为上面的构造器增加两个属性（price 和rating）和一个方法（即 getInfo()）吧。由于 prototype 属性包含的是一个对象：
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
   return 'Rating: ' + this.rating +', price: ' + this.price;
};
如果您不想将它们逐一添加到原型对象中去，也可以另外定义一个对象，然后将其覆盖到之前的原型上：
Gadget.prototype = {
    price: 100,
    rating: … /* and so on… */
}; 

2. --“实时”（live）性
由于在 JavaScript 中，几乎所有对象都是通过传引用的方式来传递的，因此我们所创建的每个新对象实体中并没有一份属于自己原型副本。
这也就意味着我们可以随时修改 prototype 属性，并且由同一构造器创建的所有对象的 prototype 属性也都会同时改变，
甚至还会影响在修改之前就已经创建了的那些对象

3. --利用自身属性重写原型属性
通过上面的讨论，我们知道如果在一个对象自身属性中没有找到指定的属性，就会使用（如果存在的话）原型链中查找到的相关的属性。
但是，如果遇上对象的自身属性与原型属性同名又该怎么办呢？
答案是对象自身属性的优先级高于原型属性

我们可以通过 hasOwnProperty()方法来判断一个属性是自身属性还是原型属性
propertyIsEnumerable()，该方法会对所有的非内建对象属性返回 true
> function Gadget(name) {
    this.name = name;
  }
> Gadget.prototype.name = 'mirror';
然后我们新建一个对象，并访问该对象自身的 name 属性：
> var toy = new Gadget('camera');
> toy.name;
"camera"
> toy.hasOwnProperty('name');
true
> delete toy.name;
true
> toy.name;
"mirror"
> toy.hasOwnProperty('name');
false 

4. --isPrototypeOf()方法/getPrototypeOf()方法
每个对象中都会有一个 isPrototypeOf()方法，这个方法会告诉我们当前对象是否是另一个对象的原型
e.g.1
var monkey = {
  hair: true,
  feeds: 'bananas',
  breathes: 'air'
};
然后，我们再创建一个叫做 Human()的构造器函数，并将其原型属性设置为指向
function Human(name) {
  this.name = name;
}
Human.prototype = monkey; 
> var george = new Human('George');
> monkey.isPrototypeOf(george);
true

e.g.2
> Object.getPrototypeOf(george).feeds;
"banana"
> Object.getPrototypeOf(george) === monkey;
true

5. --神秘的__proto__链接
而对于另一部分实现了 ES5 部分功能，却没有实现 getPrototypeOf()方法的浏览器，我们可以使用特殊属性__proto__
注：__proto__实际上是某个实例对象的属性，而 prototype 则是属于构造器函数的属性！！！！！
> typeof developer.__proto__;
"object"
> typeof developer.prototype;
"undefined"
> typeof developer.constructor.prototype;
"object" 
当然，出于学习的目的来调用这种神秘的属性是无可厚非的，但如果是在实际的脚本编写中，这并不是一个好主意。
因为该属性在 Internet Explorer 之类的浏览器中是不存在的，因此脚本就不能实现跨平台了
