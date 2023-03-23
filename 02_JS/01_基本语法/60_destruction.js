// 一、数组的解构赋值：
/*
S6允许按照一定规则从数组或对象中提取值，并对变量进行赋值。
说直白点，等号两边的结构相同，右边的值会赋给左边的变量
*/
// 1.基本用法
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); //1,2,3

let [d, , ] = [1, 2, 3];
console.log(d); //1

let [
  [e], f
] = [
  [1], 2
];
console.log(e, f); //1,2

let [g, ...h] = [1, 2, 3];
console.log(g, h); //1,[2,3]

// 2.不完全解构---右边提供的值要比变量多
let [
  [i]
] = [
  [1, 2], 3
];
console.log(i); //1

// 3.解构赋值失败为undefined
let [j] = [];
console.log(j); //undefined

// 4.支持解构赋值提供默认值
// 规则是先看右边的值是否严格等于undefined，
// 如果是undefined才会用默认值，除此之外，都是优先用右边提供的值。
let [k = 1, l = 2] = [3];
console.log(k, l); //3,2

let [m = 1, n = 2] = [undefined, null];
console.log(m, n); //1，null

// 默认值支持是一个表达式，比如一个函数，赋值规则还是遵守先看右边是否为undefined。

function func1() {
  return 2;
}
let [o = func1()] = [1];
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
let [p = 1, q = p] = [];
console.log(p, q); //1,1

// 二、对象的解构赋值

// 1.基本用法

// 对象解构赋值与数组有些不同，数组像按照等号对称的赋值，而对象是按照key名相同赋值，与顺序无关
let {
  a1,
  b1
} = {
  b1: 1,
  a1: 2
};
console.log(a1, b1); //2,1

// 按照直觉，a赋值的过程是，从右边找a,如果有，就将右边a的值赋给左边a。
// 但变量解构赋值的本质其实是这样的，前面的a只是作为匹配的依据，后者才是赋值的变量与值
let {
  a: b2
} = {
  a: 23
};
console.log(b2); //23
// console.log('s = ' + s); //ReferenceError: s is not defined

// 2.变量解构嵌套使用
let {
  a3: [b3, {
    c3
  }]
} = {
  a3: [1, {
    c3: 2
  }]
};
console.log(b3, c3); //1,2

// 3.变量解构赋值失败

// 如果解构嵌套的是对象，且这个对象的父对象在右边不存在，当解构赋值时，会报错，
// 原因是这个变量右边没有为undefined，从undefined中读取任意属性是非法操作。

// let {a: { b5 }} = { c: { b5: 1 } }; // key值a和c没有匹配上
// console.log(b4); //报错 Cannot read properties of undefined (reading 'b5')

// 4.变量解构赋值存在继承关系
let obj1 = {};
let obj2 = {
  a4: 2
};
Object.setPrototypeOf(obj1, obj2);
console.log(obj1)
let {
  a4
} = obj1
console.log(a4) //2

// 5.对象解构赋值也存在默认值
// 对象解构赋值也支持默认值，规则与数组类似，只有右边的值严格等于undefined，左边的默认值才会生效。
let {
  a5 = 1, b5 = 2
} = {
  a5: undefined,
  b5: null
};
console.log(a5, b5) //1,null

// 6.对象解构与数组解构的混合使用
// 因为数组本身也属于特殊对象，所以混合使用并不非法。
let arr = [1, 2, 3]
let {
  0: a6,
  [arr.length - 1]: b6
} = arr;
console.log(a6, b6) //1,3
/*
上述代码等同于以下代码，以数组下标(索引作为key)
let {0:a,[arr.length-1]:b} = [0:1,1:2,2:3];
*/

// 三、字符串解构赋值
// 字符串解构赋值时，字符串会转为一个类数组。
let [a7, b7, c7, d7] = "love";
console.log(a7, b7, c7, d7) //l,o,v,e

// 因为是类数组，所以自然拥有length属性，我们也可以读取length属性进行赋值。

let {
  length: a8
} = "love";
console.log(a8); //4

// 四、函数参数解构赋值
// 规则符合参考数组，对象的解构赋值

function add([a, b]) {
  console.log(a + b)
};
add([1, 2]) //3

// 所以函数解构赋值肯定是支持使用默认值的
function add1([a = 1, b = 2] = []) {
  console.log(a + b);
}
add1(); //3
add1([3, 4]); //7

// 五、使用解构赋值的好处

// 1.变量交换值--笔试有这样的题目
let a9 = 1,
  b9 = 2;
[a9, b9] = [b9, a9];
console.log(a9, b9) //2,1

// 2.让函数返回多个值

//  如果让函数返回多个值，我们可以将这些值放在数组或对象里，但是取值就麻烦了，
// 还要遍历，使用解构赋值就方便很多

function func2() {
  return [1, 2, 3];
}
let [r, s, t] = func2();
console.log(r, s, t); //1,2,3

// 3.让函数参数有所对应

//  默认给函数参数，参数取值都是按顺序取用户传递的值，但是使用了解构赋值，就不需要按照顺序传递了。
function add2(a, b) {
  console.log(a, b)
};
add2(1, 2) //1,2
//不按照顺序
function add3({
  b,
  a
}) {
  console.log(a, b)
};
add3({
  a: 3,
  b: 4
}) //1,2

// 4.提取JSON数据

let jsonData = {
  'name': "echo",
  'age': 26,
  'address': "深圳"
};
let {
  name,
  age,
  address
} = jsonData;
console.log(name, age, address);

// 5.为函数形参添加默认值
// 传统写法：

function add4(x, y) {
  var a = x || 3;
  var b = y || 4;
  console.log(a + b);
}
add4() //3

// 解构赋值写法：
function add5({ a = 1, b = 2 } = {}) {
  console.log(a + b);
}
add5(); //3
add5({ a: 4, b: 5 }); //9


// 6.遍历Map解构

// 解构赋值能为for...of遍历取值提供遍历，这个只是点我还没看到，先记录

const map = new Map();
map.set('a', 1);
map.set('b', 2);
for (let [key, value] of map) {
  console.log(key + " is " + value);//a is 1  b is 2
};

// 7.模块引入方法
// 只是为不同变量赋予不同的引入方法，利用解构赋值可以为多个变量赋值，比较方便。
// const { SourceMapConsumer, SourceNode } = require("source-map");