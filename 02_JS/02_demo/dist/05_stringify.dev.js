"use strict";

var a = "[\"http://baidu.com\", \"http:hao123.com\"]";
var str = JSON.stringify(a);
var b = JSON.parse(a);
console.log(str);
console.log(b);
var c = JSON.stringify(b);
console.log(c);