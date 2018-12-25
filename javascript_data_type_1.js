//整理自JavaScript面向对象编程指南（第2版）
//variable
一、数字
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

5. --NaN
> typeof NaN;
"number"
> var a = NaN;
> a;
NaN 

如果我们在算术运算中使用了不恰当的的操作数，导致运算失败，该运算就会返回NaN。
例如当我们试图让数字 10 与字符"f"相乘时，结果就会为 NaN，因为"f"显然是不
支持乘法运算的。
> var a = 10 * "f";
> a;
NaN

而且 NaN 是有传染性的，只要我们的算术运算中存在一个 NaN，整个运算就会失败。
> 1 + 2 + NaN;
NaN 

二、字符串
1. --+操作
支持字符串的+操作，和python一样

2. --字符串转换
当我们将一个数字字符串用于算术运算中的操作数时，该字符串会在运算中被当做数
字类型来使用。（由于加法操作符的歧义性，这条规则不适用于加法运算。）
> var s = '1';
> s = 3 * s;
> typeof s;
"number"
> s;
3
> var s = '1';
> s++;
> typeof s;
"number"
> s;
2 

如果转换操作失败了，我们就会得到一个 NaN 值。
> var movie = '101 dalmatians';
> movie * 1;
NaN

此外，将其他类型转换为字符串也有一种偷懒的方法，只需要将其与空字符串相加
即可：
> var n = 1;
> typeof n;
"number"
> n = "" + n;
"1"
> typeof n;
"string" 

3. --特殊字符串
当我们想要在字符串中使用引号时，就必须对它们进行转义，这样 JavaScript才不会将其认作字符串的终止符
> '1\'2\''
"1'2'"
\u 后面的字符将会被视为 Unicode 码

三、布尔值
1. --逻辑运算符
JavaScript 中有三种逻辑运算符，它们都属于布尔运算。分别是：
!—逻辑非（取反）；
&&—逻辑与；
||—逻辑或
！的优先级最高，因此在没有括号限定的情况下它将会被最先执行
接下来的优先顺序是&&，最后才是||

2. --falsy 值
空字符串""。
null。
undefined。
数字 0。
数字 NaN。
布尔值 false

3. --惰性求值
书写的时候尽量避免，但是加花指令的时候嘿嘿嘿

4. --比较运算符
== 当两个操作数相等时返回 true
=== 当且仅当两个操作数的值和类型都相同时返回 true
e.g.
>1=='1'
true
>1==='1'
false

四、 undefined 与 null
1. --undefined
当我们尝试使用一个不存在的变量时，控制台中就会产生以下错误信息：
> foo;
ReferenceError: foo is not defined

但当对不存在的变量使用 typeof 操作符时则不会出现这样的错误，而是会返回一个
字符串"undefined"。
> typeof foo;
"undefined"

如果我们在声明一个变量时没有对其进行赋值，调用该变量时并不会出错，但 typeof
操作符依然会返回"undefined"：
> var somevar;
> somevar;
> typeof somevar;
"undefined" 

2. --null
> var somevar = null;
null
> somevar;
null
> typeof somevar;
"object" 

3. --两者的区别
> var i = 1 + undefined;
> i;
NaN
> var i = 1 + null;
> i;
1

转换成数字：
> 1 * undefined;
NaN
> 1 * null;
0 

转换成布尔值：
> !!undefined;
false
> !!null;
false

转换成字符串：
> "value: " + null;
"value: null"
> "value: " + undefined;
"value: undefined" 
