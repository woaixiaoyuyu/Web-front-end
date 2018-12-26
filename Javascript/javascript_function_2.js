//整理自JavaScript面向对象编程指南（第2版）
//变量的作用域
1.
这是一个至关重要的问题。特别是当我们从别的语言转向 JavaScript 时，必须要明
白一点，即在 JavaScript 中，变量的定义并不是以代码块作为作用域的，而是以函数作
为作用域。也就是说，如果变量是在某个函数中定义的，那么它在函数以外的地方是不
可见的。而如果该变量是定义在 if 或者 for 这样的代码块中的，它在代码块之外是可
见的。另外，在 JavaScript 中，术语“全局变量”指的是定义在所有函数之外的变量（也
就是定义在全局代码中的变量），与之相对的是“局部变量”，所指的则是在某个函数中
定义的变量。其中，函数内的代码可以像访问自己的局部变量那样访问全局变量，反之
则不行。

//我感觉语法有带你毒瘤
e.g
> var global = 1;
    function f() {
    var local = 2;
    global++;
    return global;
  }
> f();
2
> f();
3
> local; 
VM143:1 Uncaught ReferenceError: local is not defined
    at <anonymous>:1:1

这里还有一点很重要，如果我们声明一个变量时没有使用 var 语句，该变量就会被默认为全局变量
e.g.
> var global = 1;
> function f() {
    local = 2;
    global++;
    return global;
  } 
> f();
2
> local;
2

2. --变量提升
> var a = 123;
    function f() {
    alert(a);
    var a = 1;
    alert(a);
  }
> f();
您可能会想当然地认为 alert()第一次显示的是 123（也就是全局变量 a 的值），而第二次显示的是 1（即局部变量 a）。
但事实并非如此，第一个 alert()实际上显示的是undefined，这是因为函数域始终优先于全局域，
所以局部变量 a 会覆盖掉所有与它同名的全局变量，
尽管在 alert()第一次被调用时，a 还没有被正式定义（即该值为undefined），但该变量本身已经存在于本地空间了。
这种特殊的现象叫做提升（hoisting）
也就是说，当 JavaScript 执行过程进入新的函数时，这个函数内被声明的所有变量都会被移动（或者说提升）到函数最开始的地方
