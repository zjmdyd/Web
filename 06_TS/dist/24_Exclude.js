"use strict";
// Exclude<T,U>的作用是将某个类型中属于另一个类型的属性移除掉
const t = 'b';
console.log(t); // b
/*
Extract
高级类型Extract和上面的Exclude刚好相反，它是将第二个参数的联合项从第一个参数的联合项中提取出来，
当然，第二个参数可以含有第一个参数没有的项
*/
/*
Omit
Omit的作用是忽略对象的某些属性功能
它的作用主要是：以一个类型为基础支持剔除某些属性，然后返回一个新类型
*/
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
//# sourceMappingURL=24_Exclude.js.map