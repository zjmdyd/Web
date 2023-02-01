/*
一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
*/
var tam = {
    id: 888,
    name: 'Tam',
    age: 25
};
var mike = {
    id: 999,
    name: 'mike'
};
console.log(tam.name);
console.log(mike.name);
