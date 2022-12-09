/*
map() 方法通过对每个数组元素执行函数来创建新数组。
map() 方法不会对没有值的数组元素执行函数。
map() 方法不会更改原始数组。

回调函数不使用 index 和 array 参数，可以省略它们
*/

var numbers1 = [1, 4, 9, 3, 5];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
/*
numbers1 = 1,4,9,3,5
numbers2 = 2,8,18,6,10
*/
console.log("numbers1 = " + numbers1);
console.log("numbers2 = " + numbers2);

/*
filter() 方法创建一个包含通过测试的数组元素的新数组。
回调函数不使用 index 和 array 参数，可以省略它们
*/
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction1);

function myFunction1(value, index, array) {
  return value > 18;
}
// over18 = 45,25
console.log("over18 = " + over18);

