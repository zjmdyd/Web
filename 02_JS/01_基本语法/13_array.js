var cars = ["Saab", "Volvo", "BMW"];
var x = cars;
console.log('x = ' + x);    // x = Saab,Volvo,BMW
console.log('x[0] = ' + x[0]);  // x[0] = Saab
console.log(typeof(x)); // object
var y = cars.toString();
console.log(y);
console.log(typeof(y)); // string

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log(fruits);

fruits[fruits.length] = "Mango2";
console.log(fruits);    // ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon', 'Mango2']

// 添加最高索引的元素可在数组中创建未定义的“洞”：
fruits[7] = "Mango3";
// ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon', 'Mango2', …, 'Mango3']
console.log(fruits);    
fruits[6] = "Mango6";
// ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon', 'Mango2', 'Mango6', 'Mango3']
console.log(fruits);    

/*
JavaScript 不支持命名索引的数组。

在 JavaScript 中，数组只能使用数字索引。

假如您使用命名索引，JavaScript 会把数组重定义为标准对象。

之后，所有数组的方法和属性将产生非正确结果。
*/
var person = [];
person["firstName"] = "Bill";
person["lastName"] = "Gates";
person["age"] = 62;
var x = person.length;         
var y = person[0];              
console.log('x = ' + x);    // x = 0
console.log('y = ' + y);    // y = undefined

// 避免使用newArray()
var points1 = new Array(40, 100);   // 创建包含两个元素的数组（40 和 100）
var points2 = new Array(40);         // 创建包含 40 个元素的数组！！！，且元素都为空
console.log('points2 = ' + points2 + 'length = ' + points2.length);
console.log(typeof(points2));   // object
console.log('points2.isArray = ' + Array.isArray(fruits));  // ECMAScript 5才支持
// 自定义的isArray方法
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

// 假如对象由给定的构造器创建，则 instanceof 运算符返回 true：
var inst =  fruits instanceof Array
console.log('fruits_inst = ' + inst);   // true
