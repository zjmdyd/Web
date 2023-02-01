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
var m = 9;
{
  var m = 10; // 对上一行定义的变量m起作用，修改了上一行定义的变量m
}
// 此处可以使用 m
console.log("after_m = " + m);  // after_m = 10

// 允许在程序的任何位置使用 var 重新声明 JavaScript 变量：
var test = 16 + "aa";
var test = 18 + "bb"
console.log(test);  // 18bb

// 在相同的作用域，或在相同的块中，通过 let 重新声明一个 let 变量是不允许的：
let x = 10;       // 允许
// let x = 6;       // 不允许
{
  let x = 11;   // 允许, 对上面定义的变量x不起作用，不会修改块级作用域外的比变量x
//   let x = 6;   // 不允许
}
x = 12  // let修饰的变量可以再修改，而const修饰的不行
console.log('x = ' + x);  // x = 10
var y = "911" + "Porsche";
console.log("y = " + y);
/*
const和let有相似的地方：
1.都是块级作用域 都是在代码块中有效
2.不能和他所在作用域中有相同的变量的名称
区别：
1.const在声明的时候必须要初始化 而let不需要
2.const经过赋值后就不能再次修改 而let赋值后是可以再次的修改的。
*/

// typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。
var arr = []
console.log(typeof(arr));

var obj = {}
console.log(typeof(obj));
