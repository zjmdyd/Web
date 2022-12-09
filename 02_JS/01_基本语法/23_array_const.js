/*
用 const 声明的数组不能重新赋值
*/
const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
// cars = Saab,Volvo,BMW
console.log("cars = " + cars);
/*
数组不是常量
关键字 const 有一定误导性。

它不定义常量数组。它定义的是对数组的常量引用
*/
// 您可以更改元素
cars[0] = "Toyota";
// cars = Toyota,Volvo,BMW
console.log("cars = " + cars);

// 您可以添加元素
cars.push("Audi");
// cars = Toyota,Volvo,BMW,Audi
console.log("cars = " + cars);

/*
JavaScript const 变量在声明时必须赋值：

意思是：用 const 声明的数组必须在声明时进行初始化。

使用 const 而不初始化数组是一个语法错误：
const cars; // 报错
cars = ["Saab", "Volvo", "BMW"];
*/

/*
const 块作用域
用 const 声明的数组具有块作用域。

在块中声明的数组与在块外声明的数组不同：
*/

