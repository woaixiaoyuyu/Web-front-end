//整理自JavaScript面向对象编程指南（第2版）
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
