/*
infer 的中文是“推断”的意思，一般是搭配上面的泛型条件语句使用的，
所谓推断，就是你不用预先指定在泛型列表中，在运行时会自动判断，不过你得先预定义好整体的结构
*/
type Foo<T> = T extends { t: infer Test } ? Test : string

/*
首选看 extends 后面的内容，{t: infer Test}可以看成是一个包含t属性的类型定义，
这个t属性的 value 类型通过infer进行推断后会赋值给Test类型，
如果泛型实际参数符合{t: infer Test}的定义那么返回的就是Test类型，否则默认给缺省的string类型。
*/
type One = Foo<number>  // string, 因为number不是一个包含t的对象类型
type Two = Foo<{ t: boolean }>  // boolean, 因为泛型参数匹配上了，使用了infer对应的type
type Three = Foo<{ a: number, t: () => void }>  // () => void，泛型定义是参数的子集，同样适配

/*
 T extends U ? X : Y;
如果占位符类型U是一个可以被分解成几个部分的类型，譬如数组类型，元组类型，函数类型，字符串字面量类型等。
这时候可以通过infer来获取U类型中某个部分的类型.
*/

/*
infer语法的限制如下：

infer只能在条件类型的 extends 子句中使用
infer得到的类型只能在true语句中使用, 即X中使用
*/

// 推断数组(或者元组)的类型
type InferArray<T> = T extends (infer U)[] ? U : never;
/*
(infer U)和平时常写的string[]，number[]等等是不是很像？这里就是通过(infer U)来获取数组对应的类型。
*/
type I0 = InferArray<[number, string]>  // string | number
type I1 = InferArray<string[]>          // string
type I2 = InferArray<number[]>          // number
type I3 = InferArray<never>             // never

// 推断数组(或者元组)第一个元素的类型
type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _] ? P : never
/*
[infer P, ... infer _]中infer P获取的是第一个元素的类型，而...infer _获取的是数组其他剩余元素的数组类型;
特别说明下，我们例子汇总不需要使用其他元素的类型，所以用_。
*/
type I4 = InferFirst<[1, 2, 1]>; // 3

// 推断数组(或者元组)最后一个元素的类型
type InferLast<T extends unknown[]> = T extends [... infer _, infer Last] ? Last : never;
/*
这个和推断数组第一个元素的类型类似，...infer _获取的是最后一个元素之前的所有元素类型，infer Last获取的是最后一个元素的类型。
*/
type I5 = InferLast<[3, 2, 1]>; // 1

// 推断函数类型的参数
type InferParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;
// ...args 代表的是函数参数组成的元组, infer R代表的就是推断出来的这个函数参数组成的元组的类型。

type I6 = InferParameters<((arg1: string, arg2: number) => void)>; // [string, number]

// 推断函数类型的返回值
type InferReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;
type I7 = InferReturnType<() => string>; // string

// 推断Promise成功值的类型
type InferPromise<T> = T extends Promise<infer U> ? U : never;
type I8 = InferPromise<Promise<string>>;  // string

// 推断字符串字面量类型的第一个字符对应的字面量类型
type InferString<T extends string> = T extends `${infer First}${infer _}` ? First : [];
type I9 = InferString<"Johnny">; // J

type User_2 = {
  id: number,
  name: string
}
type ProperType<T> = T extends { id: infer U, name: infer R } ? [U, R] : T
type U0 = ProperType<User_2>  // type U3 = [number, string]
/*
在 PropertyType 工具类型中，我们通过 infer 声明了两个类型变量 U 和 R，
分别表示对象类型中 id 和 name 属性的类型。若类型匹配，我们就会以元组的形式返回 id 和 name 属性的类型
*/

/*
协变： 支持子类赋值给父类
逆变： 支持父类赋值给子类

首先记住一句话：函数参数是逆变的，而对象属性是协变的。
变量处于逆变位置就是这个变量是一个函数的参数
*/
type ProperType_1<T> = T extends { id: infer U, name: infer U } ? U : T
// 在协变位置上(infer U的位置上)，若同一个类型变量存在多个候选者，则最终的类型将被推断为联合类型 
type U1 = ProperType_1<User_2>  // type U1 = string | number

type ProperType_2<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never
// 在逆变位置上，若同一个类型变量存在多个候选者，则最类型将被推断为交叉类型: string & number,所以U2最终类型是never
type U2 = ProperType_2<{ a: (x: string) => void, b: (x: number) => void }> // type U2 = never

type ProperType_3<T> = T extends { a: (x: infer U) => void, b: (x: infer R) => void } ? [U, R] : never
type U3 = ProperType_3<{ a: (x: string) => void, b: (x: number) => void }> // type U3 = [string, number]

// 联合类型转交叉类型
type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer R) => void ? R : never

type V0 = { a: 'a' } | { b: 'b' }
type T2 = UnionToIntersection<V0>
/*
type T2 = {a: 'a';} & {b: 'b';}
*/

type K0 = { name: string }
type K1 = { age: number }
type K2 = K0 & K1

// 结构化子类型时有一个规则，如果实例 b 能够赋值给实例 a，则 a 中的全部属性需要能在 b 中找到
let k2: K2 = {
  name: 'a',
  age: 1
}
let k0: K0 = k2 // k0 的所有属性能在 k2 中找到, 可以赋值

// 注意与U2的差别,
interface Props {
  a: (x: K0) => void,
  b: (x: K1) => void
}
// 推断出交叉类型
type T3 = ProperType_2<Props> // type T3 = K0 & K1

/*
逆变与协变是泛型类型中的一个概念，当然不只只是 TS 独有的概念。简单来说，假设存在类型 T2 为 T1 的子类，
并且从 T1 派生出新类型 N<T1>以及从 T2 中派生出新类型 N<T2>。如果可以将 N<T2> 的实例赋值给类型为 N<T1> 的实例，则称为协变。
如果能将 N<T1> 的实例赋值给类型 N<T2> 的实例则称之为逆变。当然如果两种类型都不能赋值，则称为不变
*/



