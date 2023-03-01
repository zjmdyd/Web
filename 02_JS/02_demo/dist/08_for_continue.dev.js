"use strict";

var ary = [1, 3, 5, 7];

for (var i = 0; i < ary.length; i++) {
  if (i == 2) {
    continue;
  }

  console.log(ary[i]);
}