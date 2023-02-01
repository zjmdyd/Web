// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数)
// rest 参数只能是最后一个参数
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, '2', 3);
console.log(a)