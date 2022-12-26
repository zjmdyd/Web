// 通过 let 定义的变量不会被提升到顶端。
// console.log("未赋值之前的n值 = " + n);	// 会报错:Cannot access 'n' before initialization
let n = 10;
// 通过 var 声明的变量会提升到顶端
console.log("未赋值之前的test变量值 = " + test);    // 不会报错，值为undefined


let i = 7;
for (let i = 0; i < 10; i++) {
    console.log('i = ' + i);
}
console.log('循环后的i = ' + i);
var test = 1;