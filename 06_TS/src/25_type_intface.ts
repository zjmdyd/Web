// interface定义存在同名定义时，会合并两个interface
interface A {
  a: number;
};

interface A {
  b: number;
}
// interface 可以如下合并多个
const a3: A = {
  a: 3,
  b: 4
}

type C = {
  name: string,
}

type D = {
  age: number,
}
// type使用交叉
type User = C & D
let stu0: User = {
  name: 'hh',
  age: 10
}

/*
//interface 扩展 type
type Name = {
  name: string;
}
interface User extends Name {
  age: number;
}
let stu:User={name: 'wang', age: 89}

//type与interface交叉
interface Name {
  name: string;
}
type User = Name & {
  age: number;
}
let stu:User={name:'wang', age: 18}
*/
