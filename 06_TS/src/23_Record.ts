/*
Record
Record的作用是将K中所有属性的值转化成T类型
*/
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type petGroup = 'dog' | 'cat' | 'fish'

interface IPetInfo {
  name: string,
  age: number
}

type IPets = MyRecord<petGroup, IPetInfo>

const animals: IPets = {
  dog: {
    name: 'dogName',
    age: 1
  },
  cat: {
    name: 'catName',
    age: 2
  },
  fish: {
    name: 'fishName',
    age: 3
  }
}
console.log(animals.dog)