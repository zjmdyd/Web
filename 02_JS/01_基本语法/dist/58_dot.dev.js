"use strict";

// 用法一:函数的剩余参数
// rest 参数只能是最后一个参数
function fn(a, b) {
  for (var _len = arguments.length, theArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    theArgs[_key - 2] = arguments[_key];
  }

  console.log(theArgs);
}

fn(1, 2, 3, 4, 5); // [ 3, 4, 5 ]