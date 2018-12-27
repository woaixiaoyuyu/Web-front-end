//整理自JavaScript面向对象编程指南（第2版）
//BOM
正如您所知，在 JavaScript 中，每个宿主环境都有一个全局对象。
具体到浏览器环境中，这就是 window 对象了。
环境中所有的全局变量都可以通过该对象的属性来访问，例如：
> window.somevar = 1;
1
> somevar;
1 
