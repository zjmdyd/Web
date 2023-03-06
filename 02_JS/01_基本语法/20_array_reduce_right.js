/*
reduceRight() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
reduceRight() 方法在数组中从右到左工作。
reduceRight() 方法不会减少原始数组。
*/
var numbers1 = [1, 2, 3, 4, 5];
var sum = numbers1.reduceRight(myFunction2, 10);

/* 有初始值
var sum = numbers1.reduceRight(myFunction2);

total = 10, value = 5
total = 15, value = 4
total = 19, value = 3
total = 22, value = 2
total = 24, value = 1
*/

/* 无初始值
var sum = numbers1.reduceRight(myFunction2);

total = 5, value = 4
total = 9, value = 3
total = 12, value = 2
total = 14, value = 1
*/
function myFunction2(total, value, index, array) {
    console.log("total = " + total + ", value = " + value);
    return total + value;
}
// sum = 15
console.log("sum = " + sum);