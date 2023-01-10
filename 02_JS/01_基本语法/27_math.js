/*
Math.round(x) 的返回值是 x 四舍五入为最接近的整数
*/
var x = Math.round(6.8);    // 7
var y = Math.round(2.3);    // 2
console.log(x);
console.log(y);

// Math.random()返回介于 0（包括） 与 1（不包括） 之间的随机数
const rd = Math.random()
const rd2 = rd * 5
console.log('rd = ' + rd + ', rd*5 = ' + rd2)
const i = Math.round(rd2)
console.log('i = ' + i)

// Math.pow(x, y) 的返回值是 x 的 y 次幂
var z = Math.pow(8, 2);
console.log(z)

var s = Math.sqrt(64)
console.log(s);

// Math.ceil(x) 的返回值是 x 上舍入最接近的整数
var t = Math.ceil(6.4);
console.log(t);

// Math.min() 和 Math.max() 可用于查找参数列表中的最低或最高值
var m = Math.min(0, 450, 35, 10, -8, -300, -78);
console.log(m);




