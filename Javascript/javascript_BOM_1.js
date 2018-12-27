//整理自JavaScript面向对象编程指南（第2版）
//BOM
正如您所知，在 JavaScript 中，每个宿主环境都有一个全局对象。
具体到浏览器环境中，这就是 window 对象了。
环境中所有的全局变量都可以通过该对象的属性来访问，例如：
> window.somevar = 1;
1
> somevar;
1 

1. --window.navigator 
一大堆功能，如：
 > window.navigator.userAgent; 
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"

2. --控制台的备忘功能
控制台提供了一种便利的对象检索功能，其功能涵盖了 BOM 和 DOM 中所有的对象。
因此通常情况下，我们只要在控制台中输入：
> navigator;
然后单击其结果，就可以将其所包含的属性展开

3. --window.location 
location 属性是一个用于存储当前载入页面 URL 信息的对象，一大堆功能，如：
> window.location.hostname
"www.baidu.com"

另外，location 对象还提供了三个方法，分别是 reload()、assign()和replace()
replace()方法的作用与 assign()基本相同，只不过它不会在浏览器的历史记录表中留下记录：
> location.replace('http://www.yahoo.com');
另外，如果我们想重新载入某个页面，可以调用：
> location.reload()

4. --window.history
window.history 属性允许我们以有限的权限操作同一个浏览器会话（session）中的
已访问页面。例如，我们可以通过以下方式来查看用户在这之前访问了多少页面：
> window.history.length;
5
基于隐私保护，我们无法获得这些页面具体的 URL，例如像下面这样是不被允许的：
> window.history[0];
但是我们可以在当前用户会话中对各页面进行来回切换，就像您在浏览器中单击后退/前进按钮一样：
> history.forward();
> history.back();
另外，我们也可以用 history.go()来实现页面跳转，例如，下面的调用效果和
history.back()相同：
> history.go(-1);
接下来是后退两页的情况：
> history.go(-2);
如果想重载当前页，可以这样：
> history.go(0);

5. --window.frames
window.frames 属性是当前页面中所有框架的集合。
要注意的是，这里并没有对frame 和 iframe（内联框架）做出区分。
而且，无论当前页面中是否存在框架，window.frames 属性总是存在的，并总是指向 window 对象本身
