// indexOf() 方法返回字符串中指定文本首次出现的索引（位置）：
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China");
var lastPos = str.lastIndexOf("China");
console.log(pos);
console.log("lastPos = " + lastPos);

/*
两种方法，indexOf() 与 search()，是相等的。

这两种方法是不相等的。区别在于：

search() 方法无法设置第二个开始位置参数。
indexOf() 方法无法设置更强大的搜索值（正则表达式）。
*/
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("China");
console.log(pos);

/*
lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索。

注意： 该方法将从后向前检索字符串，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 看它是否含有字符串。

开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）。

如果没有找到匹配字符串则返回 -1 。

注意：lastIndexOf() 方法是区分大小写的！
*/
var str = "I rb, wlc rb site.";
var n = str.lastIndexOf("rb");
console.log("n1 = " + n);    // 10

var n = str.lastIndexOf("rb", 11);
console.log("n2 = " + n);    // 10

var n = str.lastIndexOf("rb", 9);
console.log("n3 = " + n);    // 2

var n = str.lastIndexOf("rb", 1);
console.log("n3 = " + n);    // -1

// slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。
var str = "Apple, Banana, Mango";
var res = str.slice(1, 3);
console.log(res)

// 如果省略第二个参数，则该方法将裁剪字符串的剩余部分：
var res = str.slice(7);
console.log(res)

// 或者从结尾计数：
var res = str.slice(-13);
console.log(res)

/*
substring() 方法
substring() 类似于 slice()。

不同之处在于 substring() 无法接受负的索引。
*/
var res = str.substring(7,13);
console.log(res)

/*
substr() 方法
substr() 类似于 slice()。

不同之处在于第二个参数规定被提取部分的长度。
*/
var res = str.substr(7,6);
console.log(res);
