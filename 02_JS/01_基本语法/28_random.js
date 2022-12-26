// Math.random() 返回介于 0（包括） 与 1（不包括） 之间的随机数
var x = Math.random();
console.log(x);

// Math.random() 与 Math.floor() 一起使用用于返回随机整数
var y = Math.random() * 10;
console.log(y);
var z = Math.floor(y);
console.log(z);

var s = Math.floor(Math.random() * 11);		// 返回 0 至 10 之间的数
console.log(s);

// 返回介于 min（包括）和 max（不包括）之间的随机数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var t = getRndInteger(10, 20);
console.log(t);