// 最简单的方法是使用「类型 + 方括号」来表示数组：
let ary: number[] = [1, 2, 3, 4, 5] // 数组中不允许出现其他类型

// 泛型数组
let fArr: Array<number> = [1, 3, 5]

// 用接口表示数组(用得少)
interface NumAry {
    [index: number] : number;
}

let nAry: NumAry = [2, 4, 6]


// any在数组总的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
console.log(list)