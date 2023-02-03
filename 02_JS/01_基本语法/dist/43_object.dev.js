"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var person = {
  firstname: "Bill",
  lastname: "Gates",
  age: 62,
  eyecolor: "blue",
  language: '',

  get lang() {
    return this.language;
  },

  set lang(lang) {
    this.language = lang;
  },

  work: function work() {
    console.log('好好干活');
  }
}; // 您可以通过简单的赋值，向已存在的对象添加新属性。
// 假设 person 对象已存在 - 那么您可以为其添加新属性：

person.nationality = "English";
var txt = '';

for (val in person) {
  txt += person[val] + ' ';
}
/*
您必须在循环中使用 person[x]。
person.x 将不起作用（因为 x 是一个变量）
*/


console.log(txt); // Bill Gates 62 blue
// Object.values()
// 通过使用 Object.values()，任何 JavaScript 对象都可以被转换为数组：

var ary = Object.values(person); // [ 'Bill', 'Gates', 62, 'blue' ]

console.log(ary); // JSON.stringify()
// 任何 JavaScript 对象都可以使用 JavaScript 函数 JSON.stringify() 进行字符串化（转换为字符串)
// JSON.stringify 不会对函数进行字符串化：

var myString = JSON.stringify(person); // {"firstname":"Bill","lastname":"Gates","age":62,"eyecolor":"blue"}

console.log(myString);
console.log(_typeof(myString));
console.log(person.work.toString()); // 数组字符串化

var arr = ["Bill", "Steve", "Elon", "David"];
var arrString = JSON.stringify(arr);
console.log(arrString); // ["Bill","Steve","Elon","David"]

console.log(_typeof(arrString)); // string