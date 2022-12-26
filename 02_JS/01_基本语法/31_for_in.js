/*
JavaScript for/in 语句遍历对象的属性
*/
var person = {fname:"Bill", lname:"Gates", age:62}; 

var text = "";
var x;
for (x in person) {
    console.log("x = " + x);
    text += person[x];
    console.log("text = " + text);
}


// JavaScript for in 语句遍历数组的属性
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}