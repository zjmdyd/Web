"use strict";

function add(a, b, c) {
  return a + b + c;
}

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