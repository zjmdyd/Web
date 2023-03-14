"use strict";
// JavaScript通过 Object.keys()获取对象的所有属性键值，而typescript主要关注的是类型操作，
// 通过 keyof 操作符可以获取对象中的所有键类型组成的联合类型
let p1 = {
    id: 10,
    name: 'mm',
    age: 18
};
let v0 = p1.id;
let v1 = p1['id'];
console.log(v0);
console.log(v1);
const p_n = 'name';
const p_a = 'age';
console.log(p_a);
// ==> 
// type TypeValue = number | string
let a0 = 1;
let a1 = 0;
let a2 = 'gg';
/*
type P4 = {
  id: number;
  name: string;
  age: number;
  phone: string;
  run: () => void;
}
*/
//# sourceMappingURL=21_keyof.js.map