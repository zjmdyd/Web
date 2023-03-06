"use strict";

/*
柯里化（Currying）又称部分求值，一个柯里化的函数首先会接收一些参数，接收了这些参数后，
该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。
待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。
*/
function add(a, b, c) {
  return a + b + c;
} // 柯里化函数


function _add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var s1 = add(1, 2, 3);
console.log(s1);

var s2 = _add(1);

console.log(s2);