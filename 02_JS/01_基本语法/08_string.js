
/*
replace() 方法不会改变调用它的字符串。它返回的是新字符串。

默认地，replace() 只替换首个匹配：
*/
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3School");
console.log(n);

// 如需替换所有匹配，请使用正则表达式的 g 标志（用于全局搜索）
var n = str.replace(/Microsoft/g, "W3School");
console.log(n);

// 如需执行大小写不敏感的替换，请使用正则表达式 /i（大小写不敏感）：
var n = str.replace(/MICROSOFT/i, "W3School");
console.log(n);

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ",text2);
console.log(text3);

var str = "       Hello World!!        ";
console.log(str.trim());
console.log(text1[0]);


var txt = "a,b,c,d,e";   // 字符串
txt.split(",");          // 用逗号分隔
console.log(txt.split(","));
console.log(txt);

txt.split(" ");          // 用空格分隔
console.log(txt.split(" "));
console.log(txt);

txt.split("|");          // 用竖线分隔
console.log(txt.split("|"));
console.log(txt);

/*
如果省略分隔符，被返回的数组将包含 index [0] 中的整个字符串。

如果分隔符是 ""，被返回的数组将是间隔单个字符的数组：
*/
txt.split()
console.log("txt.split()");
console.log(txt.split());
console.log(txt)
console.log(txt.split(""));

/*
String.match()
match() 方法根据正则表达式在字符串中搜索匹配项，并将匹配项作为 Array 对象返回。
*/
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // 返回数组 [ain,ain,ain]
// 对 "ain" 执行不区分大小写的全局搜索
text.match(/ain/gi)   // 返回数组 [ain,AIN,ain,ain]

var txt = "Hello world, welcome to the universe.";
console.log(txt.includes("world"));  // 返回 true

/*
string.startsWith(searchvalue, start)
可选。默认为 0。开始搜索的位置
*/
var txt = "Hello world, welcome to the universe.";
txt.startsWith("Hello")   // 返回 true
text.startsWith("world", 5)    // 返回 false

/*
string.endsWith(searchvalue, length)
可选。要搜索的长度。
*/
var txt = "Hello world, welcome to the universe.";
console.log(txt.endsWith("world", 8));      // 返回 false
console.log(txt.endsWith("world", 11));     // 返回 true