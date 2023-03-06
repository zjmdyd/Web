/*
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
而在使用的时候再指定类型的一种特性
*/
// 未使用泛型的函数
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var ary1 = createArray(3, 'x'); // ['x', 'x', 'x']
console.log(ary1);
// 上面这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型
// 我们预期的是，数组中每一项都应该是输入的 value 的类型
// 这是候就使用泛型
function createArray2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var ary2 = createArray2(3, 'y'); // ['x', 'x', 'x']
// 也可以不手动指定，而让类型推论自动推算出来
// createArray2(3, 'y'); // ['x', 'x', 'x']
console.log(ary2);
/*
我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，
在后面的输入 value: T 和输出 Array<T> 中即可使用了
*/
// 定义泛型的时候，可以一次定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var seven_7 = swap([7, 'seven']); // ['seven', 7]
console.log(seven_7);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
/*
我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了
*/
loggingIdentity('hello');
// 多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var key in source) {
        console.log('key = ' + key);
        target[key] = source[key];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var obj = copyFields(x, { b: 10, d: 20 });
console.log(obj);
var createArray1;
createArray1 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
var GenericNumber = /** @class */ (function () {
    function GenericNumber(val) {
        this.arr = [];
        this.add1 = function (x, y) {
            return x;
        };
        this.zeroValue = val;
    }
    GenericNumber.prototype.add = function (x, y) { };
    GenericNumber.prototype.min = function () {
        var min = this.arr[0];
        this.arr.forEach(function (value) {
            if (value < min) {
                min = value;
            }
        });
        return min;
    };
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber(0);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2));
myGenericNumber.arr = [1, 3, 5, 0];
console.log(myGenericNumber.min());
