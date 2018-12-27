//整理自JavaScript面向对象编程指南（第2版）
//继承
//浅拷贝，深拷贝
我们已经知道当对象被拷贝时，实际上拷贝的只是该对象在内存中的位置指针。
这一过程就是所谓的浅拷贝，在这种情况下，如果我们修改了拷贝对象，就等同于修改了原对象。
而深拷贝则可以帮助我们避免这方面的问题
python中也存在这种浅拷贝、深拷贝的问题

function deepCopy(p, c) {
  c = c || {};
  for (vari in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === 'object') {
        c[i] = Array.isArray(p[i]) ? [] : {};
        deepCopy(p[i], c[i]);
      }
      else {
        c[i] = p[i];
      }
    }
  }
  return c;
}
现在我们来创建一个对象，该对象包含数组和子对象：
var parent = {
  numbers: [1, 2, 3],
  letters: ['a', 'b', 'c'],
  obj: { 
    prop: 1
  },
  bool: true
};
测试
> var mydeep = deepCopy(parent);
> mydeep.numbers.push(4,5,6);
6
> mydeep.numbers;
[1, 2, 3, 4, 5, 6]
> parent.numbers;
[1, 2, 3]
并没有影响继承的原型

使用 deepCopy()函数要注意两点。
在拷贝每个属性之前，建议使用 hasOwnProperty()来确认不会误拷贝不需要的继承属性。
由于区分 Array 对象和普通 Object 对象相当繁琐，所以 ES5 标准中实现了Array.isArray()函数。
这个跨浏览器的最佳解决方案（换句话说，为仅支持ES3 的环境提供 isArray()函数）虽然看起来有点取巧，但却是有效的。
if (Array.isArray !== "function") {
  Array.isArray = function (candidate) {
  return 
  Object.prototype.toString.call(candidate) === '[object Array]';
  };
} 
