"use strict";

/*
在 JavaScript 中，可以在使用变量之后对其进行声明。
换句话说，可以在声明变量之前使用它。
Hoisting 是 JavaScript 将所有声明提升到当前作用域顶部的默认行为（提升到当前脚本或当前函数的顶部）。
但用 let 或 const 声明的变量和常量不会被提升！
*/
x = 5;
console.log('x = ' + x); // x = 5

var x; // JavaScript 只提升声明，而非初始化。

var m1 = 9;
console.log('m1 + n1 = ' + m1 + '' + n1); // m1 + n1 = 9undefined

var n1 = 1;
var m2 = 9;
var n2 = 1;
console.log('m2 + n2 = ' + m2 + '' + n2); // m2 + n2 = 91