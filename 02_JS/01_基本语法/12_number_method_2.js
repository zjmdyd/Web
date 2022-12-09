/*
把变量转换为数值
这三种 JavaScript 方法可用于将变量转换为数字：

Number() 方法
parseInt() 方法
parseFloat() 方法
这些方法并非数字方法，而是全局 JavaScript 方法。
*/

var x = true;
var y = Number(x);        
console.log(y)  // 返回 1
console.log(typeof(y))  // number
x = false;
Number(x);          // 返回 0
x = new Date();
Number(x);          // 返回 1404568027739，为毫秒数
x = "10"
Number(x);          // 返回 10
x = "10 20"
y = Number(x);      // 返回 NaN
console.log(y)

/*
parseInt() 方法
parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字：
*/
y = parseInt("10");     // 返回 10
console.log(typeof(y)); // number
parseInt("10.33");      // 返回 10
parseInt("10 20 30");   // 返回 10
parseInt("10 years");   // 返回 10
parseInt("years 10");   // 返回 NaN

y = parseFloat("10");    // 返回 10
console.log(y);
console.log(typeof(y));
parseFloat("10.33");     // 返回 10.33
parseFloat("10 20 30");  // 返回 10
parseFloat("10 years");  // 返回 10
parseFloat("years 10");  // 返回 NaN

y = Number.MAX_VALUE;
console.log(y);

/*
数字属性不可用于变量
数字属性属于名为 number 的 JavaScript 数字对象包装器。

这些属性只能作为 Number.MAX_VALUE 访问。

使用 myNumber.MAX_VALUE，其中 myNumber 是变量、表达式或值，将返回 undefined：
*/
var x = 6;
var y = x.MAX_VALUE;    // y 成为 undefined
console.log(y)  