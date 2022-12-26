/*
所有具有“真实”值的即为 True
所有不具有“真实”值的即为 False
0（零）的布尔值为 false
-0 （负零）的布尔值为 false
*/
console.log(Boolean(0));
console.log(Boolean(-0));

// ""（空值）的布尔值为 false
var x;
console.log("x = " + x);
console.log(Boolean(x));

// undefined 的布尔值是 false

var y = "h";
console.log("y = " + y);
console.log(Boolean(y));

// (x === y) 为 false，因为 x 和 y 的类型不同
// 当使用 === 运算符时，相等的布尔是不相等的，因为 === 运算符需要在类型和值两方面同时相等
var x = false;
var y = new Boolean(false);
console.log("x == y -> " + (x == y));
console.log("x == y -> " + (x === y));

// (x == y) 为 false，因为对象无法比较
var x = new Boolean(false);             
var y = new Boolean(false);
console.log("x == y -> " + (x == y));

