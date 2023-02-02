// 重载
// 可以使用重载定义多个 reverse 的函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123))   // 321
console.log(reverse('abc')) // cba

// 用type声明函数
// 先声明一个函数
type AddFun = (a: number, b: number) => number;
// 再根据声明去实现这个函数
let add: AddFun = function(x, y) {
    return x + y
}
let res = add(10, 20)
console.log(res)

