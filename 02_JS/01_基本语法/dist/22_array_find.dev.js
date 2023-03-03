"use strict";

/*
find() 方法返回通过测试函数的第一个数组元素的值。
*/
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // first = 25


console.log("first = " + first);
var objs = [{
  id: 0,
  name: '马云'
}, {
  id: 1,
  name: '雷军'
}, {
  id: 2,
  name: '马化腾'
}];
var firstObj = objs.find(myFunction2);

function myFunction2(value, index, array) {
  return value.id == 2;
} // first = 25


console.log("firstObj = ");
console.log(firstObj);
/*
findIndex() 方法返回通过测试函数的第一个数组元素的索引。
*/

var first = numbers.findIndex(myFunction); // first = 3

console.log("first = " + first);