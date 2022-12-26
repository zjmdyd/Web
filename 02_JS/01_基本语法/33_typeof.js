typeof "Bill"                 // 返回 "string"
typeof 3.14                   // 返回 "number"
typeof NaN                    // 返回 "number"
typeof false                  // 返回 "boolean"
typeof [1,2,3,4]              // 返回 "object"
typeof {name:'Bill', age:19}  // 返回 "object"
typeof new Date()             // 返回 "object"
typeof function () {}         // 返回 "function"
typeof myCar                  // 返回 "undefined" *
typeof null                   // 返回 "object"

/*
您无法使用 typeof 来确定 JavaScript 对象是否是数组（或日期）
typeof 运算符会为数组返回 "object"，因为在 JavaScript 中数组是对象
typeof 运算符可以返回以下原始类型之一：
string
number
boolean
undefined
*/

/*
复杂数据
typeof 运算符可以返回两种复杂类型之一：
function
object
*/

/*
constructor 属性
constructor 属性返回所有 JavaScript 变量的构造函数
*/
/*
"Bill".constructor                // 返回 function String()  {[native code]}
(3.14).constructor                // 返回 function Number()  {[native code]}
false.constructor                 // 返回 function Boolean() {[native code]}
[1,2,3,4].constructor             // 返回 function Array()   {[native code]}
{name:'Bill',age:19}.constructor  // 返回 function Object()  {[native code]}
new Date().constructor            // 返回 function Date()    {[native code]}
function () {}.constructor        // 返回 function Function(){[native code]}
*/

// 您可以检查 constructor 属性以确定对象是否为数组（包含 "Array" 一词）
var ary = [1, 2, 3]
var result = isArray(ary);      // result = true
console.log("result = " + result);
function isArray(myArray) {
    let mConstructor = myArray.constructor.toString();
    let idx = mConstructor.indexOf("Array");    // idx = 9
    console.log("mConstructor = " + mConstructor);
    console.log("idx = " + idx);
    return idx > -1;
  }

  var result2 = isArray2(ary);      // result2 = true
  console.log("result2 = " + result);
  function isArray2(myArray) {
    let mConstructor = myArray.constructor;
    console.log("mConstructor = " + mConstructor);
    return myArray.constructor === Array;
  }

var d = new Date();
var result3 = isDate(d);      // result3 = true
console.log("result3 = " + result3);
function isDate(mDate) {
    let mConstructor = mDate.constructor;
    console.log("mConstructor = " + mConstructor);
    return mDate.constructor === Date;
}

/*
Undefined
在 JavaScript 中，没有值的变量的值是 undefined。类型也是 undefined
*/
let car;    // 值是 undefined，类型也是 undefined。
console.log("car = " + car);

/*
Null
在 JavaScript 中 null 即是“无”。它应该是不存在的东西。

不幸的是，在 JavaScript 中，null 的数据类型是一个对象。

你可以认为它是 JavaScript 中的一个 bug，typeof null 是一个对象。类型应为 null。

您可以通过将对象设置为 null 来清空对象
*/
let person = {firstName:"Bill", lastName:"Gates", age:19, eyeColor:"blue"};
person = null;    // 现在值为 null，但类型仍然是对象
console.log("person = " + person);  // person = null
console.log("typeof(person) = " + typeof(person));  // typeof(person) = object

/*
undefined 与 null 的区别
undefined 和 null 值相等但类型不同
*/
console.log("typeof undefined = " + typeof undefined)   // undefined
console.log("typeof null = " + typeof null)             // object

console.log("null === undefined = " + (null === undefined))     // false
console.log("null == undefined = " + (null == undefined))       // true
