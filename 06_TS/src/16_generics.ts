/*
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
而在使用的时候再指定类型的一种特性
*/

// 未使用泛型的函数
function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

var ary1 = createArray(3, 'x'); // ['x', 'x', 'x']
console.log(ary1)
// 上面这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型

// 我们预期的是，数组中每一项都应该是输入的 value 的类型
// 这是候就使用泛型

function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

const ary2 = createArray2<string>(3, 'y'); // ['x', 'x', 'x']
// 也可以不手动指定，而让类型推论自动推算出来
// createArray2(3, 'y'); // ['x', 'x', 'x']
console.log(ary2)
/*
我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，
在后面的输入 value: T 和输出 Array<T> 中即可使用了
*/

// 定义泛型的时候，可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const seven_7 = swap([7, 'seven']); // ['seven', 7]
console.log(seven_7)

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
/*
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // 泛型 T 不一定包含属性 length，所以编译的时候报错了
    return arg;
}
*/
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
/*
我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了
*/
loggingIdentity('hello')

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let key in source) {
    console.log('key = ' + key)
    target[key] = (<T>source)[key];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

const obj = copyFields(x, { b: 10, d: 20 });
console.log(obj)


// 泛型接口
/*
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
*/

// 我们可以把泛型参数提前到接口名上
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc<any>;
createArray1 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

class GenericNumber<T> {
  zeroValue: T;
  arr: T[] = [];
  constructor(val: T) {
    this.zeroValue = val
  }

  add1: (x: T, y: T) => T = function (x: T, y: T): T {
    return x
  }
  add(x: T, y: T){}
  min(): T {
    var min = this.arr[0];
    this.arr.forEach(function (value) {
      if (value < min) {
        min = value;
      }
    });
    return min;
  }
}

let myGenericNumber = new GenericNumber<number>(0);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2))
myGenericNumber.arr = [1, 3, 5, 0]
console.log(myGenericNumber.min())