// 如果再次声明某个 JavaScript 变量，将不会丢它的值。
var carName = "porsche";
var carName; 
console.log(carName)

// 允许在程序的任何位置使用 var 重新声明 JavaScript 变量：
var test = 16 + "aa";
var test = 18 + "bb"
console.log(test);

// 在相同的作用域，或在相同的块中，通过 let 重新声明一个 let 变量是不允许的：
let x = 10;       // 允许
// let x = 6;       // 不允许

{
  let x = 10;   // 允许
//   let x = 6;   // 不允许
}

var y = "911" + "Porsche";
console.log(y);

// typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。
var arr = []
console.log(typeof(arr));

var obj = {}
console.log(typeof(obj));
