"use strict";

var _this = void 0;

var array = ['a', 'b', 'c']; // 非箭头函数

array.forEach(function (element) {
  console.log('function函数体:' + element);
}); // 箭头函数

array.forEach(function (element, index) {
  console.log('箭头函数' + index + ':' + element);
}, void 0); // this参数

(void 0).name = 'gg';
array.forEach(function (element, index) {
  console.log(_this.name + index + ':' + element);
}, void 0); // continue与break

var arr = [1, 2, 3, 4, 5]; // continue的实现

arr.forEach(function (item) {
  if (item === 3) {
    return; // 3的元素跳过
  }

  console.log(item, 'continue的实现');
}); // some() 方法检查某些数组值是否通过了测试。

console.log('*****some*****');
var val = arr.some(function (item) {
  if (item === 2) {
    return true;
  }

  console.log(item);
});
console.log(val, '*****some*****');
console.log('****break示例******'); // break的实现

arr.every(function (item) {
  console.log(item);
  return item != 3; // every条件不满足时，every方法会跳出
});