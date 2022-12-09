/*
find() 方法返回通过测试函数的第一个数组元素的值。
*/
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// first = 25
console.log("first = " + first);

/*
findIndex() 方法返回通过测试函数的第一个数组元素的索引。
*/

var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// first = 3
console.log("first = " + first);