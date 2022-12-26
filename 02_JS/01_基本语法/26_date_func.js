var d = new Date();
var t = d.getTime();        // getTime() 方法返回自 1970 年 1 月 1 日以来的毫秒数
var y = d.getFullYear();    // getFullYear() 方法以四位数字形式返回日期年份
var m = d.getMonth();       // getMonth() 以数字（0-11）返回日期的月份
var day = d.getDate();      // getDate() 方法以数字（1-31）返回日期的日
var h = d.getHours();       // getHours() 方法以数字（0-23）返回日期的小时数
var min = d.getMinutes();   // getMinutes() 方法以数字（0-59）返回日期的分钟数
var s = d.getSeconds();     // getSeconds() 方法以数字（0-59）返回日期的秒数
var mills = d.getMilliseconds();     // getMilliseconds() 方法以数字（0-999）返回日期的毫秒数
var weekday = d.getDay();   // getDay() 方法以数字（0-6）返回日期的星期名（weekday
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekdayString = days[weekday];
console.log(t);
console.log(y);
console.log(m);
console.log(day);
console.log(h);
console.log(min);
console.log(s);
console.log(mills);
console.log(weekday);
console.log(weekdayString);

// 
d.setFullYear(2021);
console.log(d);
// setFullYear() 方法可以选择设置月和日
d.setFullYear(2020, 10, 3);
console.log(d);
// setMonth() 方法设置日期对象的月份（0-11）
d.setMonth(8);
console.log(d);
// setDate() 方法设置日期对象的日（1-31)
d.setDate(31);
console.log(d);
