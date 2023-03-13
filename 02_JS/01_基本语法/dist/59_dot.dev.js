"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 用法一：函数的剩余参数(Rest parameters)
// 在定义函数的时候，形参当中，最后一个参数（theArgs）如果以 ... 作为前缀，那么 theArgs 就会变为一个数组
// rest 参数只能是最后一个参数
// 例 1.1
function fn1(a, b) {
  for (var _len = arguments.length, theArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    theArgs[_key - 2] = arguments[_key];
  }

  console.log(theArgs);
}

fn1(1, 2, 3, 4, 5); // [ 3, 4, 5 ]
// 用法二：展开语法(Spread syntax)

/*
1）调用函数时
剩余参数是在函数定义时形参里使用的，展开语法的用处之一则是在函数调用时，
传入的实参里使用。具体说就是将数组表达式或者 string 在语法层面展开作为实参传给函数。
*/
// 例 2.1

var arr = [1, 2, 3];
var string = 'Jay';

function fn2(a, b, c) {
  console.log(a, b, c);
} // fn 接收 3 个参数，如果我们想把数组 arr 中的每个元素传给 fn，在 ES6 之前可以利用 apply 实现：
// 例 2.1.1


fn2.apply(null, arr); // 1 2 3
// 有了展开语法，则可以直接将作为参数的数组 arr 展开，这样可以提高代码的可读性 ：
// 例 2.1.2

fn2.apply(void 0, arr); // 1 2 3
// 展开语法还可以将字符串展开：
// 例 2.1.3

fn2.apply(void 0, _toConsumableArray(string)); // J a y
// 2）构造数组时
// 通过字面量方式构造数组时,也可以使用展开语法
// 例 2.2

var arr1 = [1, 2];
var arr2 = [3, 4, 5]; // 构造字面量数组

var newArr = [].concat(arr1, arr2);
console.log(newArr); // [ 1, 2, 3, 4, 5 ]

/*
3）构造字面量对象时
除了构造数组，ES2018(ES9) 添加了新的特性使得构造对象的时候也可以运用展开语法，
被展开的对象表达式将按 key-value 的方式展开
*/
// 例 2.3.1

var obj = {
  name: 'Jay'
};

var newObj = _objectSpread({}, obj, {
  age: 40
});

console.log(newObj); // { name: 'Jay', age: 40 }
// 在构造对象字面量时，还可以把数组也放进去展开
// 例 2.3.2

var obj1 = {
  foo: 'bar',
  x: 42
};
var obj2 = {
  foo: 'baz',
  y: 13
};

var merge = function merge() {
  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    objects[_key2] = arguments[_key2];
  }

  return _objectSpread({}, objects);
};

var mergedObj = merge(obj1, obj2);
console.log(mergedObj); // { '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }

/*
乍看上去迷迷糊糊的，可能的难点在于第 4 行代码的理解，
它定义了一个函数 const merge = (...objects) => ({ ...objects }，
其中=> 左边的 ...objects 为函数的剩余参数语法，
所以 objects 就是一个由 obj1 和 obj2 这两个对象组成的数组：[ { foo: 'bar', x: 42 }, { foo: 'baz', y: 13 } ]；
=>右边的 ...objects 用到的是展开语法，用于构造字面量对象，只不过因为 objects 是个数组，
所以展开数组得到的对象的 key 为数组的下标，即 { ...objects } 得到的对象为：
{ '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
*/

/*
用法三：解构数组时
在对数组进行解构赋值时，我们可以使用剩余模式，将剩余数组赋值给一个变量，
效果上类似于函数的剩余参数。比如下面例 3.1 中的 c：
*/
// 例 3.1

var arr3 = [1, 2, 3, 4, 5];
var a = arr3[0],
    b = arr3[1],
    c = arr3.slice(2);
console.log(c); // [ 3, 4, 5 ]