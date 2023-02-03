"use strict";

// JavaScript 中的数字均保存为 64 位的浮点数（Floats）。
var x = 0.1;
var y = 0.2;
var z = x + y;
console.log(z); // 0.30000000000000004

console.log(z == 0.3); // false

console.log(x == 0.1); // true
// 为了解决上面的问题，请使用乘除运算

var m = (x * 10 + y * 10) / 10;
console.log(m); // 0.3
// 字符串换行

var x = "hello \
world";
console.log("x = " + x);