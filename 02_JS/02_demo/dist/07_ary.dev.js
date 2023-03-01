"use strict";

var obj = {
  a: {
    name: 'gg'
  },
  b: {
    name: 'hh'
  }
};
var ary = [];

for (var i in obj) {
  console.log(i);
  var param = {};
  param[i] = obj[i];
  ary.push(param);
}

console.log(ary);

for (var i = 0; i < ary.length; i++) {
  var item = ary[i];

  for (key in item) {
    console.log(key);
    console.log(item[key]);
  }
} // for (var i = 0; i < ary.length; i++) {
//     var item = ary[i]
//     console.log(item)
// }