//整理自JavaScript面向对象编程指南（第2版）
//object
//内建对象
一、Array方法
sort()方法用于给数组排序
1. --length
> var a=[1,4,5,6]
undefined
> a.length
4

2. --push/pop
> a.push('dasfas')
5
> a.pop()
"dasfas"
> a
(4) [1, 4, 5, 6]

3. --join
> a.join('yuyu')
"1yuyu4yuyu5yuyu6"

4. --slice/splice
> var b =a.slice(0,2)
undefined
> b
(2) [1, 4]
> var c =a.splice(0,1)
undefined
> c
[1]
> a
(3) [4, 5, 6]
> var c =a.splice(0,2,'xiaoyuyu',3,'lala')
undefined
> c
(2) [4, 5]
> a
(4) ["xiaoyuyu", 3, "lala", 6]

二、Function方法
1. --call()与 apply()
var some_obj = {
    name: 'Ninja',
    say: function(who){
      return 'Haya ' + who + ', I am a ' + this.name;
  }
};
这样一来，我们就可以调用该对象的 say()方法，并在其中使用 this.name 来访问
其 name 属性了：
> some_obj.say('Dude');
"Haya Dude, I am a Ninja" 
下面，我们再创建一个 my_obj 对象，它只有一个 name 属性：
> var my_obj = {name: 'Scripting guru'};
显然，some_obj 的 say()方法也适用于 my_obj，因此我们希望将该方法当做 my_obj
自身的方法来调用。在这种情况下，我们就可以试试 say()函数中的对象方法 call()：
> some_obj.say.call(my_obj, 'Dude');
"Haya Dude, I am a Scripting guru" 
也可以用apply()
> some_obj.say.apply(my_obj, ['Dude']);
"Haya Dude, I am a Scripting guru" 

2. --推断对象类型
e.g.
> Object.prototype.toString.call({});
"[object Object]"
> Object.prototype.toString.call([]);
"[object Array]" 

三、Number方法
1. --主要是三个方法：toFixed()、toPrecision()和 toExponential()
> var n = new Number(123.456);
> n.toFixed(1);
"123.5" 

> (12345).to Exponential();
> "1.2345e+4" 

2. --tostring
tostring 可以多带一个参数表示进制
> (3).toString(2);
"11"
> (3).toString(10);
"3" 

四、String方法
1. --toUpperCase()与 toLowerCase()
转换大小写

2. --indexOf()
indexOf()方法可以帮助我们实现字符串内部搜索，该方法在遇到匹配字符时会返回第一次匹配位置的索引值
如果方法找不到匹配对象，返回的位置索引值就为-1

3. --slice()和 substring()
这两个方法的第二个参数所指定的都是区间的末端位置
这两个方法的不同之处在于对负值参数的处理方式，substring()方法会将负值视为 0，而 slice()方法则会将它与字符串的长度相加。
因此，如果我们传给它们的参数是(1,-1)的话，它们的实际情况分别是 substring(1, 0)和 slice(1,s.length-1)

4. --concat()
concat()方法通常用于合并字符串，它的功能与基本字符串类型的+操作符类似
> 'xiaoyuyu'.concat('lala')
"xiaoyuyulala"

5. --split()
split()是 join()的反操作，后者则会将一个数组合并成一个字符串
split()方法可以根据我们所传递的分割字符串，将目标字符串分割成一个数组
> 'xiaoyuyu,lala'.split(',');
(2) ["xiaoyuyu", "lala"]

五、Math
Math 对象不是函数对象，所以我们不能对它调用 new 操作符，以创建别的对象
//sqrt(),sin(),cos(),atan,floor(),ceil(),round(),random()
/*
数字常数 π
> Math.PI;
3.141592653589793

2 的平方根：
> Math.SQRT2;
1.4142135623730951

欧拉常数 e:
> Math.E;
2.718281828459045

2 的自然对数：
> Math.LN2;
0.6931471805599453

10 的自然对数：
> Math.LN10;
2.302585092994046 
*/

六、Date
1. --介绍
Date()是用于创建 Date 对象的构造器函数，我们在用它创建对象时可以传递以下几种参数:
1)无参数（默认为当天的日期）。
2)一个用于表现日期的字符串。
3)分开传递的日、月、时间等值。
4)一个 timestamp 值。
> new Date();
 Wed Feb 27 2013 23:49:28 GMT-0800 (PST)
> new Date('2015 11 12');
 Thu Nov 12 2015 00:00:00 GMT-0800 (PST)
> new Date('1 1 2016');
 Fri Jan 01 2016 00:00:00 GMT-0800 (PST)
> new Date('1 mar 2016 5:30');

传参顺序:
年份；
月份：从 0（1 月）到 11（12 月）；
日期：从 1 到 31；
时数：从 0 到 23；
分钟：从 0 到 59；
秒钟：从 0 到 59；
毫秒数：从 0 到 999

2. --方法
//getMonth()、setMonth()、getHours()
Date.parse()方法会将其所接收的字符串转换成相应的 timestamp 格式，并返回：
> Date.parse('Jan 11, 2018');
1515657600000 

Date.UTC()方法则可以接受包括年份、月份、日期等在内的所有参数，并以此产生一个相应的、符合格林尼治时标准的 timestamp 值：
> Date.UTC(2018, 0, 11);
1515628800000 
