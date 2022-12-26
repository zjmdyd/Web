var carName;        // 声明之后，变量是没有值的。（技术上，它的值是 undefined。）
console.log(carName); // undefined
// 如果再次声明某个 JavaScript 变量，将不会丢它的值。
var carName = "porsche";
var carName; 
console.log(carName); // porsche

/*
全局（在函数之外）声明的变量拥有全局作用域
全局变量可以在 JavaScript 程序中的任何位置访问
*/
var carName = "porsche";
// 此处的代码可以使用 carName

function myFunction() {
  // 此处的代码也可以使用 carName
}

/*
函数作用域
局部（函数内）声明的变量拥有函数作用域
*/
// 此处的代码不可以使用 funcVar
function myFunction() {
  var funcVar = "funcValue";
  // code here can use funcVar
}
// 此处的代码不可以使用 funcVar
// console.log(funcVar); // 报错

/*
JavaScript 块作用域
通过 var 关键词声明的变量没有块作用域。
在块 {} 内声明的变量可以从块之外进行访问
*/
// before_m = undefined
console.log("before_m = " + m);
{
  var m = 10;
}
// 此处可以使用 m
console.log("after_m = " + m);

// 允许在程序的任何位置使用 var 重新声明 JavaScript 变量：
var test = 16 + "aa";
var test = 18 + "bb"
console.log(test);  // 18bb

// 在相同的作用域，或在相同的块中，通过 let 重新声明一个 let 变量是不允许的：
let x = 10;       // 允许
// let x = 6;       // 不允许

{
  let x = 10;   // 允许
//   let x = 6;   // 不允许
}

var y = "911" + "Porsche";
console.log("y = " + y);

// typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。
var arr = []
console.log(typeof(arr));

var obj = {}
console.log(typeof(obj));
