// 如果是 any 类型，则允许被赋值为任意类型
let num: any = 'seven'
console.log(typeof(num))
num = 7

// 可以访问任意属性和方法
console.log(num.age)
// num.setName('Tom')
console.log(num.name)

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
// 即如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let something
something = 'gg'
something = 9
console.log(typeof(something))

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
/*
never 和 void 的差异
void 表示没有任何类型，never 表示永远不存在的值的类型。
*/
