// 初始化计数器
var counter = 0;

// 递增计数器的函数
function add() {
  var counter = 0;  // 局部变量，函数外不起作用
  counter += 1;
}

// 调用三次 add()
add();
add();
add();
console.log('counter = ' + counter)    // 0

/*
JavaScript 嵌套函数
所有函数都有权访问全局作用域。
事实上，在 JavaScript 中，所有函数都有权访问它们“上面”的作用域。
JavaScript 支持嵌套函数。嵌套函数可以访问其上的作用域。
*/
function add2() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();     
    return counter; 
}
console.log('add2 = ' + add2()) // 1

// var add3 = function () {
//     var counter = 0;
//     return function () {
//         return counter += 1;
//     }
// }
// console.log(add3()())

/*
变量 add 的赋值是自调用函数的返回值。
这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。
这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。
这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。
计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。
闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。
*/
var add4 = (function () {
    console.log('进入add4自调用函数')
    var counter = 0;
    return function () {
        console.log('调用闭包counter = ' + counter)
        return counter += 1;
    }
})()
console.log(add4.toString())
console.log(add4())
console.log(add4())
console.log(add4())
