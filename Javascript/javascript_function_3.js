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
既然函数与任何可以被赋值给变量的数据是相同的，那么它当然可以像其他数据那样被定义、删除、拷贝，以及当成参数传递给其他函数
关键点就是函数做参数，很方便的操作
e.g.1
> function invokeAdd(a, b){
    return a() + b();
    }
> function one() {
    return 1;
    }
> function two() {
    return 2;
    }
现在，我们只需将这两个函数传递给目标函数 invokeAdd()，就可以得到执行结果了：
> invokeAdd(one, two);
3 

e.g.2 匿名函数非常优雅
> invokeAdd(
    function () { return 1; },
    function () { return 2; }
    );
3

e.g.3
