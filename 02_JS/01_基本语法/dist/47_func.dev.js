"use strict";

// 函数声明
function myFunc(a, b) {
  return a * b;
} // 函数表达式(匿名函数)


var x = function x(a, b) {
  return a * b;
};

var z = x(4, 3);
console.log(z);
/*
Function() 构造器
JavaScript 函数是通过 function 关键词定义的。
函数也可以通过名为 Function() 的内建 JavaScript 函数构造器来定义。
*/

var myFunc2 = new Function('a', 'b', "return a * b");
var z2 = myFunc2(5, 6);
console.log(z2); // Hoisting 应用于变量声明和函数声明。
// 使用表达式定义的函数不会被提升。

var z3 = myFunc3(6);
console.log(z3);

function myFunc3(y) {
  return y * y;
}
/*
自调用函数
函数表达式可以作为“自调用”。
自调用表达式是自动被调用（开始）的，在不进行调用的情况下。
函数表达式会自动执行，假如表达式后面跟着 ()。
*/
// (function myFunc4() {
//     console.log('haha')
// })()
// 自执行函数只能调用一次，与myFunc4一起调用会报错


(function (str) {
  console.log('没有名字: ' + str);
})('没有名字，自执行函数');