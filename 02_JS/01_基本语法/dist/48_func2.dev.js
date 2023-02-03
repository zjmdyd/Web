"use strict";

/*
全局对象
当不带拥有者对象调用对象时，this 的值成为全局对象。
在 web 浏览器中，全局对象就是浏览器对象。
本例以 this 的值返回这个 window 对象：
*/
var x = myFunction();
console.log(x);

function myFunction() {
  return this; // 返回全局对象
}
/*
arguments 对象
JavaScript 函数有一个名为 arguments 对象的内置对象。
arguments 对象包含函数调用时使用的参数数组。
*/


x = findMax(1, 123, 500, 115, 44, 88);
console.log(x); // 500

function findMax() {
  var i;
  var max = -Infinity;

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}