"use strict";

var ary = [{
  name: 'a'
}, {
  name: 'b'
}];

for (var i in ary) {
  var item = ary[i];
  console.log(item);
  console.log(item.name);
  item.age = i;
  console.log(item.age);
}

console.log(ary);