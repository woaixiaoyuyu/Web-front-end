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

4. --即时函数
匿名函数在回调函数中很优雅，接下来，我们来看匿名函数的另一个应用示例----这种函数可以在定义后立即调用
e.g.1
(
 function(){
    alert('boo');
 }
)();
代码看上去挺诡异的，其实就是直接执行这个function
第二个括号不光可以掉膘立刻调用，还可以传参数
e.g.2
(
 function(name){
    alert('Hello ' + name + '!');
 }
)('dude');
使用即时（自调）匿名函数的好处是不会产生任何全局变量。
当然，缺点在于这样的函数是无法重复执行的（除非您将它放在某个循环或其他函数中）。
这也使得即时函数非常适合于执行一些一次性的或初始化的任务

5. --内部（私有）函数
本质就是在一个函数内部定义另一个函数
在一个函数内部定义另一个函数
使用私有函数的好处主要有以下几点：
有助于我们确保全局名字空间的纯净性（这意味着命名冲突的机会很小）。
确保私有性—这使我们可以选择只将一些必要的函数暴露给“外部世界”，而保
留属于自己的函数，使它们不为该应用程序的其他部分所用
有点像python的装饰器

6. --返回函数的函数
顾名思义
e.g.
function a()
{
    alert('A');
    return function b()
    {
        alert('B');
    };
}
var newfunc = a();
//弹出文本框A
newfunc()();
//弹出文本框B

7. --能重写自己的函数
e.g.
function a() {
    alert('A!');
    a = function(){
    alert('B!');
    };
} 
a()
//调用文本框A
a()
//调用文本框B
通过重写函数来使得函数具有一次性
