"use strict";

/*
局部 JavaScript 变量
在 JavaScript 函数中声明的变量，会成为函数的局部变量。
局部变量的作用域是局部的：只能在函数内部访问它们。
*/

/*
全局 JavaScript 变量
函数之外声明的变量，会成为全局变量。
全局变量的作用域是全局的：网页的所有脚本和函数都能够访问它。
*/
var carName = " porsche"; // 此处的代码能够使用 carName 变量

function myFunction1() {} // 此处的代码也能够使用 carName 变量

/*
自动全局
如果您为尚未声明的变量赋值，此变量会自动成为全局变量
注意此种情况是赋值在前, 赋值之前变量还未声明
*/


myFunction(); // 此处的代码可以把 carName 作为全局变量使用。

var msg = "我可以显示 " + carName;
console.log(msg);

function myFunction() {
  carName = "porsche";
}