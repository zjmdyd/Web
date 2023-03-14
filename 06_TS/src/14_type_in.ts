// type能用in生成映射类型，但interface不行

type Keys = 'name' | 'sex'
type Dukey = {
  [key in Keys]: string // 类似于for...in
}
/*
type Dukey = {
  name: string,
  sex: string
}
*/
let stu: Dukey = {
  name: 'wang',
  sex: '女'
}


