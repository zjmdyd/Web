"use strict";
// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数)
// rest 参数只能是最后一个参数
function push(array, ...items) {
    items.forEach(function (item) {
        console.log(item);
        array.push(item);
    });
}
let a = [];
push(a, 1, '2', 3);
console.log(a);
//# sourceMappingURL=10_func3_element....js.map