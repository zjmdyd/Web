/*
JavaScript for of 语句循环遍历可迭代对象的值。

它允许您循环遍历可迭代的数据结构，例如数组、字符串、映射、节点列表等
*/
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    console.log("x = " + x);
    text += x;
    console.log("text = " + text);
}

/*
遍历字符串
*/
let language = "JavaScript";
let str = "";
for (let x of language) {
    str += x;
    console.log("str = " + str);
}
