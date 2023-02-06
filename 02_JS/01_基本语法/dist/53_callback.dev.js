"use strict";

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  var sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 6, myDisplayer); // setInterval()和clearInterval()

var count = 0;
var tID = setInterval(function () {
  var d = new Date();
  var str = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(str);

  if (count++ > 5) {
    clearInterval(tID); // 取消定时器
  }
}, 1000);