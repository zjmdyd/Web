var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
// a = 0
console.log("a = " + a);

/*
Array.lastIndexOf() 与 Array.indexOf() 类似，但是从数组结尾开始搜索
*/
// a = 2
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log("a = " + a);

var b = fruits.lastIndexOf("Apple", 1); // 从index=1开始从后往前找
console.log("b = " + b);    // b = 0
var c = fruits.lastIndexOf("Apple", 3); // 从index=3开始从后往前找
console.log("c = " + c);    // c = 2
