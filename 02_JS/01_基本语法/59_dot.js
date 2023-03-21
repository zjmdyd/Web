// 用法一：函数的剩余参数(Rest parameters)
// 在定义函数的时候，形参当中，最后一个参数（theArgs）如果以 ... 作为前缀，那么 theArgs 就会变为一个数组
// rest 参数只能是最后一个参数
// 例 1.1
function fn1(a, b, ...theArgs) {
  console.log(theArgs)
}
fn1(1, 2, 3, 4, 5) // [ 3, 4, 5 ]

// 用法二：展开语法(Spread syntax)
/*
1）调用函数时
剩余参数是在函数定义时形参里使用的，展开语法的用处之一则是在函数调用时，
传入的实参里使用。具体说就是将数组表达式或者 string 在语法层面展开作为实参传给函数。
*/
// 例 2.1
const arr = [1, 2, 3]
const string = 'Jay'

function fn2(a, b, c) {
  console.log(a, b, c)
}

// fn 接收 3 个参数，如果我们想把数组 arr 中的每个元素传给 fn，在 ES6 之前可以利用 apply 实现：
// 例 2.1.1
fn2.apply(null, arr) // 1 2 3

// 有了展开语法，则可以直接将作为参数的数组 arr 展开，这样可以提高代码的可读性 ：
// 例 2.1.2
fn2(...arr) // 1 2 3

// 展开语法还可以将字符串展开：

// 例 2.1.3
fn2(...string) // J a y

// 2）构造数组时
// 通过字面量方式构造数组时,也可以使用展开语法
// 例 2.2
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
// 构造字面量数组
const newArr = [...arr1, ...arr2]
console.log(newArr) // [ 1, 2, 3, 4, 5 ]

/*
3）构造字面量对象时
除了构造数组，ES2018(ES9) 添加了新的特性使得构造对象的时候也可以运用展开语法，
被展开的对象表达式将按 key-value 的方式展开
*/
// 例 2.3.1
const obj = {
  name: 'Jay'
}
const newObj = {
  ...obj,
  age: 40
}
console.log(newObj) // { name: 'Jay', age: 40 }

// 在构造对象字面量时，还可以把数组也放进去展开

// 例 2.3.2
const obj1 = {
  foo: 'bar',
  x: 42
}
const obj2 = {
  foo: 'baz',
  y: 13
}
const merge = (...objects) => ({
  ...objects
})
const mergedObj = merge(obj1, obj2)
console.log(mergedObj) // { '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
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
const arr3 = [1, 2, 3, 4, 5]
const [a, b, ...c] = arr3
console.log(c) // [ 3, 4, 5 ]
