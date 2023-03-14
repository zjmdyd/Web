"use strict";
exports.__esModule = true;
var foo_1 = require("foo");
// import testDeclareVar from "./global"
// import jQuery from "./global"
var dirs = [foo_1["default"].Down, foo_1["default"].Up];
console.log(dirs);
// testDeclareVar = 10
// console.log(testDeclareVar)
// jQuery('#foo');
// jQuery = function(selector) {
// return selector
// return document.querySelector(selector);
// };
// let cat0 = new Animal('Tom')
var sum_1 = require("./sum");
// console.log(sum(2, 2))
// testDeclareVar = 1
// console.log(testDeclareVar)
var cat0 = new sum_1["default"]('Tom');
console.log(cat0);
