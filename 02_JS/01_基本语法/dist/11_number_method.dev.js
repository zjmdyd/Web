"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// toString() 以字符串返回数值。
var myNumber = 128;
myNumber.toString(16);
console.log(myNumber);
console.log(myNumber.toString(16)); // 返回 80

console.log(myNumber.toString(8)); // 返回 200

console.log(myNumber.toString(2)); // 返回 10000000

var x = 123;
x.toString();
console.log(x);
console.log(_typeof(x)); // number

var y = x.toString();
console.log(y);
console.log(_typeof(y)); // string

/*
toExponential() 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。
该参数是可选的。如果您没有设置它，JavaScript 不会对数字进行舍入。
*/

var x = 9.656;
var y = x.toExponential(2); // 返回 9.66e+0

console.log(y); // 9.66e+0

console.log(_typeof(y)); // string

var z = x.toExponential(4); // 返回 9.6560e+0

console.log(z); // 9.6560e+0

var m = x.toExponential();
console.log(m); // 9.656e+0

/*
toFixed() 方法
toFixed() 返回字符串值，它包含了指定位数小数的数字：
*/

var x = 9.656;
var y = x.toFixed(0); // 返回 10

console.log(y);
console.log(_typeof(y));
var z = x.toFixed(2); // 返回 9.66

console.log(z);
/*
toPrecision() 方法
toPrecision() 返回字符串值，它包含了指定长度的数字：
*/

var x = 9.656;
var y = x.toPrecision(); // 返回 9.656

console.log(y);
var z = x.toPrecision(2); // 返回 9.7

console.log(z);
x.toPrecision(4); // 返回 9.656

/*
valueOf() 方法
valueOf() 以数值返回数值：
在 JavaScript 中，数字可以是原始值（typeof = number）或对象（typeof = object）。

在 JavaScript 内部使用 valueOf() 方法可将 Number 对象转换为原始值。

没有理由在代码中使用它。

所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。
*/

var x = 123;
var y = x.valueOf(); // 从变量 x 返回 123

console.log(y);
console.log(_typeof(y)); // number

123 .valueOf(); // 从文本 123 返回 123

var x = 'abc';
var y = x.valueOf();
console.log(y);
console.log(_typeof(y)); // string