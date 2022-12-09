/*
数组排序
sort() 方法以字母顺序对数组进行排序：
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // 对 fruits 中的元素进行排序
// fruit.sort = Apple,Banana,Mango,Orange
console.log("fruit.sort = " + fruits);

/*
反转数组
reverse() 方法反转数组中的元素。
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();            // 反转元素顺序
// fruit.reverse = Mango,Apple,Orange,Banana
console.log("fruit.reverse = " + fruits);

/*
sort() 方法在对数值排序时会产生不正确的结果.
如果数字按照字符串来排序，则 "25" 大于 "100"，因为 "2" 大于 "1"。
通过比值函数来解决此问题，比值函数省略时默认用ASCII码比较
*/
var nums = [25, 100, 7, 3, 9]
// nums.sort = 100,25,3,7,9
nums.sort() // 未使用比值函数结果会出错
console.log("nums.sort = " + nums);
nums.sort(function(a, b) {return a - b});
// nums.sort = 3,7,9,25,100
console.log("nums.sort = " + nums);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points);

var min = Math.min(1, 2, 3);
console.log("min = " + min);
var min = Math.min.apply(null, [1, 2, 3]);
console.log("min = " + min);
