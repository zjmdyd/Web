"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 一、数组的解构赋值：

/*
S6允许按照一定规则从数组或对象中提取值，并对变量进行赋值。
说直白点，等号两边的结构相同，右边的值会赋给左边的变量
*/
// 1.基本用法
var a = 1,
    b = 2,
    c = 3;
console.log(a, b, c); //1,2,3

var _ref = [1, 2, 3],
    d = _ref[0];
console.log(d); //1

var e = 1,
    f = 2;
console.log(e, f); //1,2

var g = 1,
    h = [2, 3];
console.log(g, h); //1,[2,3]
// 2.不完全解构---右边提供的值要比变量多

var _ref2 = [[1, 2], 3],
    _ref2$ = _slicedToArray(_ref2[0], 1),
    i = _ref2$[0];

console.log(i); //1
// 3.解构赋值失败为undefined

var _ref3 = [],
    j = _ref3[0];
console.log(j); //undefined
// 4.支持解构赋值提供默认值
// 规则是先看右边的值是否严格等于undefined，
// 如果是undefined才会用默认值，除此之外，都是优先用右边提供的值。

var _ref4 = [3],
    _ref4$ = _ref4[0],
    k = _ref4$ === void 0 ? 1 : _ref4$,
    _ref4$2 = _ref4[1],
    l = _ref4$2 === void 0 ? 2 : _ref4$2;
console.log(k, l); //3,2

var _undefined = undefined,
    m = _undefined === void 0 ? 1 : _undefined,
    _ref5 = null,
    n = _ref5 === void 0 ? 2 : _ref5;
console.log(m, n); //1，null
// 默认值支持是一个表达式，比如一个函数，赋值规则还是遵守先看右边是否为undefined。

function func1() {
  return 2;
}

var _ = 1,
    o = _ === void 0 ? func1() : _;
console.log(o); //1
// 等同于下面代码

/* 
let o;
if ([1][0] === undefined) {
  o = func1();
} else {
  o = [1][0];
}
console.log(o); //1
*/
// 默认值支持使用别的变量，但前提是这个变量已经提前声明，否则会报错。

var _ref6 = [],
    _ref6$ = _ref6[0],
    p = _ref6$ === void 0 ? 1 : _ref6$,
    _ref6$2 = _ref6[1],
    q = _ref6$2 === void 0 ? p : _ref6$2;
console.log(p, q); //1,1
// 二、对象的解构赋值
// 1.基本用法
// 对象解构赋值与数组有些不同，数组像按照等号对称的赋值，而对象是按照key名相同赋值，与顺序无关

var _b1$a = {
  b1: 1,
  a1: 2
},
    a1 = _b1$a.a1,
    b1 = _b1$a.b1;
console.log(a1, b1); //2,1
// 按照直觉，a赋值的过程是，从右边找a,如果有，就将右边a的值赋给左边a。
// 但变量解构赋值的本质其实是这样的，前面的a只是作为匹配的依据，后者才是赋值的变量与值

var _a = {
  a: 23
},
    b2 = _a.a;
console.log(b2); //23
// console.log('s = ' + s); //ReferenceError: s is not defined
// 2.变量解构嵌套使用

var _a2 = {
  a3: [1, {
    c3: 2
  }]
},
    _a2$a = _slicedToArray(_a2.a3, 2),
    b3 = _a2$a[0],
    c3 = _a2$a[1].c3;

console.log(b3, c3); //1,2
// 3.变量解构赋值失败
// 如果解构嵌套的是对象，且这个对象的父对象在右边不存在，当解构赋值时，会报错，
// 原因是这个变量右边没有为undefined，从undefined中读取任意属性是非法操作。
// let {a: { b5 }} = { c: { b5: 1 } }; // key值a和c没有匹配上
// console.log(b4); //报错 Cannot read properties of undefined (reading 'b5')
// 4.变量解构赋值存在继承关系

var obj1 = {};
var obj2 = {
  a4: 2
};
Object.setPrototypeOf(obj1, obj2);
console.log(obj1);
var a4 = obj1.a4;
console.log(a4); //2
// 5.对象解构赋值也存在默认值
// 对象解构赋值也支持默认值，规则与数组类似，只有右边的值严格等于undefined，左边的默认值才会生效。

var _a5$b = {
  a5: undefined,
  b5: null
},
    _a5$b$a = _a5$b.a5,
    a5 = _a5$b$a === void 0 ? 1 : _a5$b$a,
    _a5$b$b = _a5$b.b5,
    b5 = _a5$b$b === void 0 ? 2 : _a5$b$b;
console.log(a5, b5); //1,null
// 6.对象解构与数组解构的混合使用
// 因为数组本身也属于特殊对象，所以混合使用并不非法。

var arr = [1, 2, 3];
var a6 = arr[0],
    b6 = arr[arr.length - 1];
console.log(a6, b6); //1,3

/*
上述代码等同于以下代码，以数组下标(索引作为key)
let {0:a,[arr.length-1]:b} = [0:1,1:2,2:3];
*/
// 三、字符串解构赋值
// 字符串解构赋值时，字符串会转为一个类数组。

var _love = "love",
    _love2 = _slicedToArray(_love, 4),
    a7 = _love2[0],
    b7 = _love2[1],
    c7 = _love2[2],
    d7 = _love2[3];

console.log(a7, b7, c7, d7); //l,o,v,e
// 因为是类数组，所以自然拥有length属性，我们也可以读取length属性进行赋值。

var _love3 = "love",
    a8 = _love3.length;
console.log(a8); //4
// 四、函数参数解构赋值
// 规则符合参考数组，对象的解构赋值

function add(_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2),
      a = _ref8[0],
      b = _ref8[1];

  console.log(a + b);
}

;
add([1, 2]); //3
// 所以函数解构赋值肯定是支持使用默认值的

function add1() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref10 = _slicedToArray(_ref9, 2),
      _ref10$ = _ref10[0],
      a = _ref10$ === void 0 ? 1 : _ref10$,
      _ref10$2 = _ref10[1],
      b = _ref10$2 === void 0 ? 2 : _ref10$2;

  console.log(a + b);
}

add1(); //3

add1([3, 4]); //7
// 五、使用解构赋值的好处
// 1.变量交换值--笔试有这样的题目

var a9 = 1,
    b9 = 2;
var _ref11 = [b9, a9];
a9 = _ref11[0];
b9 = _ref11[1];
console.log(a9, b9); //2,1
// 2.让函数返回多个值
//  如果让函数返回多个值，我们可以将这些值放在数组或对象里，但是取值就麻烦了，
// 还要遍历，使用解构赋值就方便很多

function func2() {
  return [1, 2, 3];
}

var _func = func2(),
    _func2 = _slicedToArray(_func, 3),
    r = _func2[0],
    s = _func2[1],
    t = _func2[2];

console.log(r, s, t); //1,2,3
// 3.让函数参数有所对应
//  默认给函数参数，参数取值都是按顺序取用户传递的值，但是使用了解构赋值，就不需要按照顺序传递了。

function add2(a, b) {
  console.log(a, b);
}

;
add2(1, 2); //1,2
//不按照顺序

function add3(_ref12) {
  var b = _ref12.b,
      a = _ref12.a;
  console.log(a, b);
}

;
add3({
  a: 3,
  b: 4
}); //1,2
// 4.提取JSON数据

var jsonData = {
  'name': "echo",
  'age': 26,
  'address': "深圳"
};
var name = jsonData.name,
    age = jsonData.age,
    address = jsonData.address;
console.log(name, age, address); // 5.为函数形参添加默认值
// 传统写法：

function add4(x, y) {
  var a = x || 3;
  var b = y || 4;
  console.log(a + b);
}

add4(); //3
// 解构赋值写法：

function add5() {
  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref13$a = _ref13.a,
      a = _ref13$a === void 0 ? 1 : _ref13$a,
      _ref13$b = _ref13.b,
      b = _ref13$b === void 0 ? 2 : _ref13$b;

  console.log(a + b);
}

add5(); //3

add5({
  a: 4,
  b: 5
}); //9
// 6.遍历Map解构
// 解构赋值能为for...of遍历取值提供遍历，这个只是点我还没看到，先记录

var map = new Map();
map.set('a', 1);
map.set('b', 2);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];

    console.log(key + " is " + value); //a is 1  b is 2
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

; // 7.模块引入方法
// 只是为不同变量赋予不同的引入方法，利用解构赋值可以为多个变量赋值，比较方便。
// const { SourceMapConsumer, SourceNode } = require("source-map");