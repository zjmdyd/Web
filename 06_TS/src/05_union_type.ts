let myNum: string | number

myNum = 'ss'
myNum = 77

// 操作符

type Person_ = {
  name: string;
  age: number;
}
type PersonKey = keyof Person_;  // PersonKey得到的类型为 'name' | 'age'
const p_n: PersonKey = 'name'
const p_a: PersonKey = 'age'
console.log(p_a)
