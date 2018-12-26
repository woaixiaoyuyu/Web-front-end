//整理自JavaScript面向对象编程指南（第2版）
//函数也是数据
1.
在 JavaScript 中，函数实际上也是一种数据。这概念对于我们日后的学习至关重要。
也就是说，我们可以把一个函数赋值给一个变量
e.g.
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
