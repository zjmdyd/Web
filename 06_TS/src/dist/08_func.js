// 函数的声明
// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
// 命名函数
function say1(name) {
    console.log(name);
}
say1('john');
// 匿名函数
var say2 = function (name) {
    console.log(name);
};
say2('baby');
// 箭头函数
var say3 = function (name) {
    console.log(name);
};
//  函数表达式
var mySum1 = function (x, y) {
    return x + y;
};
console.log(mySum1(10, 5)); // 15
/*
这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，
是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
*/
var mySum2 = function (x, y) {
    return x + y;
};
/*
注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
在 TypeScript 的类型定义中，=> 用来表示函数的定义，
左边是输入类型，需要用括号括起来，右边是输出类型。
*/
console.log(mySum1(3, 8));
console.log(mySum2(4, 6));
