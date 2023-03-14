"use strict";
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123)); // 321
console.log(reverse('abc')); // cba
// 再根据声明去实现这个函数
let add = function (x, y) {
    return x + y;
};
let res = add(10, 20);
console.log(res);
//# sourceMappingURL=11_func4_type.js.map