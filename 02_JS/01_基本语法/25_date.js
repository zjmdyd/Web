var d = new Date();
console.log(d);

/*
7个数字分别指定年、月、日、小时、分钟、秒和毫秒（按此顺序）
可以省略成6个数字、5个数字、4个数字、3个数字、2个数字,
不能省略月份，如果只提供一个参数，则将其视为毫秒。
*/
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);


// 一位和两位数年份将被解释为 19xx 年
var d = new Date(99, 11, 24);
console.log(d);

var d = new Date(9, 11, 24);
console.log(d);

var d = new Date(0);
console.log(d);

// var d = new Date(100000000000); 1970年1月1日减去100000000000毫秒

var d = new Date(86400000); // 一天（24 小时）是 86 400 000 毫秒
console.log(d);

var d = new Date("2018-02-19");
console.log(d);
