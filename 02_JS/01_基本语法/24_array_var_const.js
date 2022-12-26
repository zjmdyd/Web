/*
在程序中的任何位置都允许用 var 重新声明数组
*/
var cars = ["Volvo", "BMW"];   // 允许
var cars = ["Toyota", "BMW"];  // 允许
cars = ["Volvo", "Saab"];      // 允许

// 不允许在同一作用域或同一块中将数组重新声明或重新赋值给 const
var cars = ["Volvo", "BMW"];         // 允许
// const cars = ["Volvo", "BMW"];       // 不允许
{
  var cars = ["Volvo", "BMW"];         // 允许
//   const cars = ["Volvo", "BMW"];       // 不允许
}

// 不允许在同一作用域或同一块中重新声明或重新赋值现有的 const 数组

const cars2 = ["Volvo", "BMW"];       // 允许
// const cars2 = ["Volvo", "BMW"];       // 不允许
// var cars2 = ["Volvo", "BMW"];         // 不允许
// cars2 = ["Volvo", "BMW"];             // 不允许

{
  const cars = ["Volvo", "BMW"];     // 允许
//   const cars = ["Volvo", "BMW"];     // 不允许
//   var cars = ["Volvo", "BMW"];       // 不允许
//   cars = ["Volvo", "BMW"];           // 不允许
}

// 允许在另一个作用域或另一个块中使用 const 重新声明数组
const cars3 = ["Volvo", "BMW"];       // 允许
{
  const cars3 = ["Volvo", "BMW"];     // 允许
}
{
  const cars3 = ["Volvo", "BMW"];     // 允许
}