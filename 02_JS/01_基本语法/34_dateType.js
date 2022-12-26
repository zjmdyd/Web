/*
JavaScript 数据类型
JavaScript 中有五种可包含值的数据类型：

字符串（string）
数字（number）
布尔（boolean）
对象（object）
函数（function）
有三种对象类型：

对象（Object）
日期（Date）
数组（Array）
同时有两种不能包含值的数据类型：

null
undefined
*/

/*
JavaScript 类型转换
JavaScript 变量能够被转换为新变量以及另一种数据类型：

通过使用 JavaScript 函数
通过 JavaScript 本身自动转换
*/

/*
把数值转换为字符串
全局方法 String() 能够把数字转换为字符串。

它可用于任意类型的数字、文字、变量或表达式：
*/
var x = 1;
var a = String(x)         // 从数值变量 x 返回字符串
var b = String(123)       // 从数值文本 123 返回字符串
var c = String(100 + 23)  // 从表达式中的数值返回字符串

// 全局方法 String() 能够将布尔转换为字符串

var d = String(false)        // 返回 "false"
var e = String(true)         // 返回 "true"
console.log("d = " + d);
console.log("e = " + e);

/*
把字符串转换为数值
全局方法 Number() 可把字符串转换为数字。

包含数字的字符串（比如 "3.14"）转换为数字（比如 3.14）。

空的字符串转换为 0。

其他字符串将转换为 NaN（Not a number，不是数字）。
*/
var f = Number("3.14"); // 返回3.14
var g = Number(" ");    // 返回0
var h = Number("");     // 返回0
var m = Number("99 88");    // 返回NaN
console.log("f = " + f);
console.log("g = " + g);
console.log("h = " + h);
console.log("m = " + m);

var n = parseFloat("3");
var o = parseFloat("3.14");
console.log("n = " + n);    // n = 3
console.log("o = " + o);    // o = 3.14

var p = parseInt("3");
var q = parseInt("3.14");
console.log("p = " + p);    // p = 3
console.log("q = " + q);    // q = 3

/*
一元 + 运算符
一元的 + 运算符可用于把变量转换为数字
*/
var r = "5";      // r 是字符串
var s = + r;      // s 是数字
console.log("r = " + r + ", typeof(r) = " + typeof(r));
console.log("s = " + s + ", typeof(s) = " + typeof(s));
// 如果无法转换变量，则仍会成为数字，但是值为 NaN（Not a number
var t = "Bill";   // t 是字符串
var u = + y;      // u 是数字 (NaN)