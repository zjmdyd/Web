"use strict";
// 最简单的方法是使用「类型 + 方括号」来表示数组：
let ary = [1, 2, 3, 4, 5]; // 数组中不允许出现其他类型
// 泛型数组
let fArr = [1, 3, 5];
let nAry = [2, 4, 6];
// any在数组总的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
console.log(list);
//# sourceMappingURL=07_ary.js.map