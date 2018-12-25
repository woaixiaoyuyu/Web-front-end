//整理自JavaScript面向对象编程指南（第2版）
//条件与循环
一、 --if/else/switch
1. --example
e.g.
> result='';
> somevar = undefined;
> if (typeof somevar !== "undefined"){
result = 'yes';
}
> result;
"" 

2. --替代 if 表达式  ? :
下面这段代码：
var a = 1;
var result = '';
if (a === 1) {
 result = "a is one";
} else {
 result = "a is not one";
}
我们完全可以将其简化为：
> var a = 1;
> var result = (a === 1) ? "a is one" : "a is not one";
但需要提醒的是，这种语法通常只用于一些非常简单的条件逻辑，千万不要滥用。因为这样做很容易使我们的代码变得难以理解

3. --switch 语句
当我们发现自己在 if 表达式中使用了太多的 else if 子句时，就应该要考虑用
switch 语句来替代 if 了。
var a = '1';
var result = '';
switch (a) {
case 1:
    result = 'Number 1';
    break;
case '1':
    result = 'String 1';
    break;
default:
    result = 'I don\'t know';
    break;
} 

二、循环
1. --for/do-while/while
这三个操作用法和C语言一样

2. --for-in 循环
for-in 循环往往被用来遍历某个数组（或对象）中的元素。
这似乎也是它唯一的用处，该循环不能用来替代 for 或 while 循环，执行某些一般性的重复操作。
e.g.
var a = [ 'a', 'b', 'c', 'x', 'y', 'z'];
var result = '\n';
for (var i in a) {
 result += 'index: ' + i + ', value: ' + a[i] + '\n';
}
结果如下：
"
index: 0, value: a
index: 1, value: b
index: 2, value: c
index: 3, value: x
index: 4, value: y 
index: 5, value: z
" 
