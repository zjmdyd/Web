// JavaScript通过 Object.keys()获取对象的所有属性键值，而typescript主要关注的是类型操作，
// 通过 keyof 操作符可以获取对象中的所有键类型组成的联合类型

type People = {
  id: number,
  name: string;
  age: number;
}
let p1: People = {
  id: 10,
  name: 'mm',
  age: 18
}

let v0 = p1.id
let v1 = p1['id']
console.log(v0)
console.log(v1)

/*
keyof操作符得到的是People类型的所有键值类型 'id','name'和'age' 
即三个字面量类型组成的联合类型'id' | 'name' | 'age'。

简单点说就是是将一个类型映射为它所有成员名称的联合类型
*/
type TypeKeys = keyof People;  // 得到的类型为 'id' | 'name' | 'age'
const p_n: TypeKeys = 'name'
const p_a: TypeKeys = 'age'
console.log(p_a)

// People[keyof People]本质是执行// People['id' | 'name' | 'age']
type TypeValue = People[keyof People]  // 获取对象所有属性值的类型  number | string 
// ==> 
// type TypeValue = number | string

let a0: TypeValue = 1
let a1: People['id'] = 0
let a2: People['name'] = 'gg'

// K extends keyof T对K进行了约束,
// 只能是'id', 'name', 'age'中的一个类型或者几个类型组成的联合类型
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type P0 = MyPick<People, 'id' | 'name'>
/* 
type P0 = {
    id: number;
    name: string;
}
*/


/*
[P in keyof T]是对所有属性的键值类型进行遍历，得到的P 分别是'id','name'和'age';
T[P]是查询类型，上面介绍过了，Person['id'] 的结果是number，
Person['name'] 的结果是string，Person['age'] 的结果是number。
*/
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}
type P1 = MyReadOnly<People>
/*
type P1 = {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}
*/

/* 去掉对象类型的某些属性
as P extends K ? never : P这部分代码叫做重映射 ，
因为我们不一定需要的是P，有些情况下需要对P进行一些转换.
重映射就是在索引后加一个 as 语句，表明索引转换成什么，它可以用来对索引类型做过滤和转换。
返回 never 代表过滤掉，否则保留。
T extends xxx 是给类型参数的约束，表示只能传入这种类型。
TS 支持类型编程，也就是对类型参数做各种运算然后返回新的类型。
对索引类型当然也可以做运算，对应的类型就是映射类型。
*/
type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
type P2 = MyOmit<People, 'id'>
/*
type P2 = {
    name: string;
    age: number;
}
*/

// 给对象类型添加新的属性
type MyAppend<T, U extends keyof any, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
type P3 = MyAppend<People, 'address', string>
/*
type P3 = {
    id: number;
    name: string;
    age: number;
    address: string;
}
*/

// 两个对象类型合并成一个新的类型
type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

type Skill = {
  phone: string,
  run: () => void
}
type P4 = Merge<People, Skill>
/*
type P4 = {
  id: number;
  name: string;
  age: number;
  phone: string;
  run: () => void;
}
*/





