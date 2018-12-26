//整理自JavaScript面向对象编程指南（第2版）
//调用函数；预定义函数
一、调用函数
1. --执行任意的参数
我们还可以创建一些在参数数量方面更为灵活的函数。
这得益于函数内部的arguments 变量，该变量为内建变量，每个函数中都能调用。
它能返回函数所接收的所有参数
e.g.1
> function args() {
return arguments;
}
> args();
[]
> args( 1, 2, 3, 4, true, 'ninja');
[1, 2, 3, 4, true, "ninja"]

e.g.2
通过变量 arguments，使之能对任意数量的参数执行求和运算。
function sumOnSteroids() {
  var i,
  res = 0,
  number_of_params = arguments.length;
  for (i = 0; i < number_of_params; i++) {
    res += arguments[i];
    }
  return res;
} 

二、预定义函数
JavaScript 引擎中有一组可供随时调用的内建函数
/*
parseInt()；
parseFloat()；
isNaN()；
isFinite()；
encodeURI()；
decodeURI()；
encodeURIComponent()；
decodeURIComponent()；
eval()
*/
1. --parseInt()
parseInt()会试图将其收到的任何输入值（通常是字符串）转换成整数类型输出。
如果转换失败就返回 NaN
> parseInt('231vssdf')
231
> parseInt('b231vssdf')
NaN
> parseInt('0377', 10);
377
> parseInt('0377', 8);
255 
> parseInt('0x377');
887 

2. --parseFloat()
parseFloat()的功能与 parseInt()基本相同，只不过它仅支持将输入值转换为十进制数。
因此，该函数只有一个参数
此外，parseFloat()还可以接受指数形式的数据（这点与 parseInt()不同）

3. --isNaN()
通过 isNaN()，我们可以确定某个输入值是否是一个可以参与算术运算的数字
> isNaN(1.23);
false
> isNaN(parseInt('abc123'));
true 

4. --isFinite()
isFinite()可以用来检查输入是否是一个既非 Infinity 也非 NaN 的数字

5. --encodeURI()/decodeURI()/encodeURIComponent()/decodeURIComponent()
在 URL（Uniform Resource Locator，统一资源定位符）或 URI（Uniform Resource
Identifier，统一资源标识符）中，有一些字符是具有特殊含义的。
如果我们想“转义”这些字符，就可以去调用函数 encodeURI()或 encodeURIComponent()。
前者会返回一个可用的 URL，而后者则会认为我们所传递的仅仅是 URL 的一部分
> var url = 'http://www.packtpub.com/scr ipt.php?q=this and that';
> encodeURI(url);
"http://www.packtpub.com/scr%20ipt.php?q=this%20and%20that" 

6. --eval()
eval()会将其输入的字符串当做 JavaScript 代码来执行
> eval('var ii = 2;');
> ii;
2 
尽管 eval()在某些情况下是很有用的，但如果有选择的话，我们应该尽量避免使用它。
对于许多经验丰富的 JavaScript 程序员来说，“Eval is evil”（Eval 是魔鬼）是一句至理名言

7. --alert()函数
接下来，让我们来看一个非常常见的函数—alert()。
该函数不是 JavaScript 核心的一部分（即它没有包括在 ECMA 标准中），而是由宿主环境—浏览器所提供的，其作用是显示一个带文本的消息对话框。
> alert("hello!")
弹出一个对话框
