"use strict";

function myDisplayer(some) {
  console.log(some);
}

var myPromise = new Promise(function (myResolve, myReject) {
  var x = 1; // 一些代码（请尝试将 x 改为 5）

  if (x == 1) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
console.log("before myPromise"); // Promise.then() 有两个参数，一个是成功时的回调，另一个是失败时的回调。

myPromise.then(function (value) {
  console.log("成功回调");
  myDisplayer(value);
}, function (error) {
  console.log("失败回调");
  myDisplayer(error);
});