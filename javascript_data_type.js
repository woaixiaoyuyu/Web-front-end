1. --当一个数字以 0 开头时，就表示这是一个八进制数
> var n3 = 0377;
> typeof n3;
"number"
> n3;
255 

2. --用 '0x' 前缀来表示一个十六进制值
> var n5 = 0xff;
> typeof n5;
"number"
> n5;
255 

3. --e指数
> 2e+3; 
2000
> typeof 2e+3;
"number" 

4 --Infinity
有一种叫做 Infinity 的特殊值。它所代表的是超出了 JavaScript 处理范围的数值。但 Infinity 依然是一个数字
当我们输入 1e308 时，一切正常，但一旦将后面的 308 改成 309 就出界了。
实践证明，JavaScript所能处理的最大值是 1.7976931348623157e+308，而最小值为5e-324
> typeof Infinity;
"number"
> 1e309;
Infinity
> 1e308;
1e+308 

Infinity 表示的是最大数（或者比最大数还要大的数）， Infinity 之前加一个负号表示最小数
> var i = -Infinity;
> i;
-Infinity

Infinity 与其他任何操作数执行任何算术运算的结果也都等于 Infinity

正负 Infinity
相加，我们也不会得到 0，而是会得到一个叫做 NaN（Not A Number 的缩写，即不是数字）的东西
> Infinity - Infinity;
NaN
