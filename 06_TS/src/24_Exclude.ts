// Exclude<T,U>的作用是将某个类型中属于另一个类型的属性移除掉

/*
/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T;
// Exclude的作用是从T中找出U中没有的元素
type T0 = Exclude<"a" | "b" | "c", "a">   // type T0 = "b" | "c"
const t:T0 = 'b'
console.log(t)  // b

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