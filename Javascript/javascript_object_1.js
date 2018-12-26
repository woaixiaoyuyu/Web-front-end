//整理自JavaScript面向对象编程指南（第2版）
//object
//从数组到对象
e.g.
> var hero = {};
> hero.breed = 'turtle';
> hero.name = 'Leonardo';
> hero.sayName = function() {
    return hero.name;
}; 

1. --删除属性或方法
> delete hero.name;
  true
然后再调用该方法，它就找不到 name 属性了：
> hero.sayName();
  "undefined" 

2. --使用 this 值 
e.g.
> var hero = {
    name: 'Rafaelo',
    sayName: function() {
    return this.name;
  }
};
> hero.sayName();
  "Rafaelo" 

3. --构造
依照惯例，我们应该将构造器函数的首字母大写，以便显著地区别于其他一般函数
e.g.
function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function() {
    return "I'm " +this.name + " and I'm a " +this.occupation;
  };
}

> var h1 = new Hero('Michelangelo');
> h1.whoAreYou();
"I'm Michelangelo and I'm a Ninja"

4. --全局对象
例如当程序的宿主环境是 Web 浏览器时，它所提供的全局对象就是 window
在构造器函数之外使用 this 关键字
> var a = 1;
> window.a;
1
> this.a;
1 

5. --instanceof 操作符
通过 instanceof 操作符，我们可以测试一个对象是不是由某个指定的构造器函数所创建的
e.g.
> function Hero(){}
> var h = new Hero();
> var o = {};
> h instanceof Hero;
true
> h instanceof Object;
true
> o instanceof Object;

5. --传递对象
e.g.1
> var original = {howmany: 1};
> var mycopy = original;
> mycopy.howmany;
1
> mycopy.howmany = 100;
100
> original.howmany;
100 

同样的，将对象传递给函数的情况也大抵如此：
e.g.2
> var original = {howmany: 100};
> var nullify = function(o) {o.howmany = 0;}
> nullify(original);
> original.howmany;

6. --比较对象
当我们对对象进行比较操作时，当且仅当两个引用指向同一个对象时，结果为 true
