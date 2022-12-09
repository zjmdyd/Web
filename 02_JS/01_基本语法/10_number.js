var x = 0.2 + 0.1;  
console.log(x)
// 使用乘除法有助于解决上面的问题：
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x 将是 0.3
console.log(x);

var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z); // The result is: 1020


/*
NaN 属于 JavaScript 保留词，指示某个数不是合法数。

尝试用一个非数字字符串进行除法会得到 NaN（Not a Number）：
*/

var x = 100 / "Apple";  // x 将是 NaN（Not a Number）
console.log(x);
console.log(isNaN(x));  // true
console.log(typeof(NaN));   // number

/*
Infinity （或 -Infinity）是 JavaScript 在计算数时超出最大可能数范围时返回的值。
*/
var x =  2 / 0;          // x 将是 Infinity
var y = -2 / 0;          // y 将是 -Infinity
console.log(x);
console.log(y);
console.log(typeof(Infinity));   // number

