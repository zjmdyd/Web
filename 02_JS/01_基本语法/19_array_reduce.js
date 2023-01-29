/*
reduce() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
reduce() 方法在数组中从左到右工作。另请参阅 reduceRight()。
reduce() 方法不会减少原始数组。
*/
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);
/*
请注意此函数接受 4 个参数：

总数（初始值/先前返回的值）
项目值
项目索引
数组本身
上例并未使用 index 和 array 参数。可以省略。
*/
function myFunction(total, value, index, array) {
  console.log("total = " + total + ", value = " + value);
  return total - value;
}
/*
total = 45, value = 4
total = 41, value = 9
total = 32, value = 16
total = 16, value = 25
sum = -9
*/
console.log("sum = " + sum);

var sum = numbers1.reduce(myFunction2);
function myFunction2(total, value, index, array) {
    console.log("total = " + total + ", value = " + value);
  return total + value;
}
/*
total = 45, value = 4
total = 49, value = 9
total = 58, value = 16
total = 74, value = 25
sum = 99
*/
console.log("sum = " + sum);

/*
reduce() 方法能够接受一个初始值：
*/
var sum = numbers1.reduce(myFunction3, 100);

function myFunction3(total, value) {
  console.log("total = " + total + ", value = " + value);
  return total + value;
}
/*
total = 100, value = 45
total = 145, value = 4
total = 149, value = 9
total = 158, value = 16
total = 174, value = 25
*/
// sum = 199
console.log("sum = " + sum);
