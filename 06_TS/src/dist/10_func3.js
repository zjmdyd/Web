// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数)
// rest 参数只能是最后一个参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, '2', 3);
console.log(a);
