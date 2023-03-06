interface Person {
    readonly id: number;    // 定义只读属性
    name: string;
    age?: number;    // 定义可选属性
    [propName: string] : string | number | undefined
    // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
    // 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
}

/*

*/
// 赋值的时候，变量的形状必须和接口的形状保持一致
let tam: Person = {
    id: 888,    // 只读属性必须在对象赋值的时候赋值
    name: 'Tam',
    age: 25
}

let mike: Person = {
    id: 999,
    name: 'mike',
}
console.log(tam.name)
console.log(mike.name)