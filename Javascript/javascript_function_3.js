//整理自JavaScript面向对象编程指南（第2版）
//函数也是数据
1.
在 JavaScript 中，函数实际上也是一种数据。这概念对于我们日后的学习至关重要。
也就是说，我们可以把一个函数赋值给一个变量
e.g.1
> function define() {
    return 1;
    }
> var express = function () {
    return 1;
    };
> typeof define;
"function"
> typeof express;
"function" 

e.g.2
> var f = function myFunc() {
    return 1;
    };
这么写不会报错，但是错误地会创建两个函数变量f和myFunc

2. --特性
它们所包含的是代码。
它们是可执行的（或者说是可调用的）
e.g.
> var sum = function(a, b) {
    return a + b;
    };
//通过这种方式定义的函数常被称为匿名函数（即没有名字的函数）
> var add = sum;
> typeof add;
"function"
> add(1, 2);
3

3. --回调函数
