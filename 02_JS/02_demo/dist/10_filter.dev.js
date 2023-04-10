"use strict";

var ary = [0, 0, 1, 1, 2, 2, 2];
var items = [];

var _loop = function _loop() {
  var item = ary[i];
  sItems = ary.filter(function (sItem) {
    return item === sItem;
  });
  items.push(sItems);
};

for (var i = 0; i < ary.length; i += sItems.length) {
  var sItems;

  _loop();
}

console.log(items); // [ [ 0, 0 ], [ 1, 1 ], [ 2, 2, 2 ] ]