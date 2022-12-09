var fruits = ["Banana", "Orange", "Apple", "Mango"];
/*
把数组转换为数组值（逗号分隔）的字符串
*/
console.log(fruits.toString());
/*
join() 方法也可将所有数组元素结合为一个字符串。
它的行为类似 toString()，但是您还可以规定分隔符：
*/
console.log(fruits.join());         // Banana,Orange,Apple,Mango
console.log(fruits.join("*"));      // Banana*Orange*Apple*Mango
console.log(fruits.join(" * "));    // Banana * Orange * Apple * Mango
/*
pop() 方法从数组中删除最后一个元素
pop() 方法返回“被弹出”的值
*/
var popItem = fruits.pop();     // 
console.log('popItem = ' + popItem);
console.log('fruits = ' + fruits);
/*
push() 方法（在数组结尾处）向数组添加一个新的元素
push() 方法返回新数组的长度
*/
var pushItemLen = fruits.push("Kiwi"); 
console.log('after_push_ItemLen = ' + pushItemLen);
console.log('fruits = ' + fruits);

/*
shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。
*/ 
var shiftItem = fruits.shift(); // shift() 方法返回被“位移出”的字符串：
console.log("shiftItem = " + shiftItem);
console.log('fruits = ' + fruits + ", after_shiftItem_len = " + fruits.length);

/*
unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素
unshift() 方法返回新数组的长度。
*/
var unshiftLen = fruits.unshift("Lemon");
console.log("unshiftLen = " + unshiftLen);
console.log(fruits);

/*
delete 运算符
使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。
*/
delete fruits[0];
console.log("after_delete_fruits = " + fruits + "\nfruits[0] = " + fruits[0]);

/*
第一个参数（2）定义了应添加新元素的位置（拼接）。
第二个参数（0）定义应删除多少元素。
其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。
splice() 方法返回一个包含已删除项的数组
*/
var fruits = ["anana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// after_splice_fruits = anana,Orange,Lemon,Kiwi,Apple,Mango
console.log("after_splice_fruits = " + fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango", "Mango2"];
var splice_back_value = fruits.splice(2, 2, "Lemon", "Kiwi");
// splice_back_value = Apple,Mango
console.log('splice_back_value = ' + splice_back_value);
// after_splice_fruits = Banana,Orange,Lemon,Kiwi,Mango2
console.log("after_splice_fruits = " + fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // 删除 fruits 中的第一个元素
// 删除第一个元素后的fruits = Orange,Apple,Mango
console.log("删除第一个元素后的fruits = " + fruits);

/*
concat() 方法不会更改现有数组。它总是返回一个新数组。
*/
var ary1 = ["a"];
var ary2 = ["b"];
var ary3 = ["c"];
var ary4 = ary1.concat(ary2, ary3);
// ary4 = a,b,c
console.log("ary4 = " + ary4);

/*
slice() 方法用数组的某个片段切出新数组。
slice() 方法创建新数组。它不会从源数组中删除任何元素。
*/
var ary1 = ["a", "b", "c", "d"];
var ary2 = ary1.slice(1);
var ary3 = ary1.slice(2);
// ary2 = b,c,d
console.log("ary2 = " + ary2);
// ary3 = c,d
console.log("ary3 = " + ary3);

/*
slice() 可接受两个参数，比如 (1, 3)。
该方法会从开始参数选取元素，直到结束参数（不包括）为止。
*/
var ary4 = ary1.slice(1, 3);
// ary4 = b,c
console.log("ary4 = " + ary4);

/*
自动 toString()
如果需要原始值，则 JavaScript 会自动把数组转换为字符串。下面两个例子将产生相同的结果：
所有 JavaScript 对象都拥有 toString() 方法

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); 

document.getElementById("demo").innerHTML = fruits; 
*/
