// 正则表达式
// 语法
// /pattern/modifiers;
/*
例子:
var patt = /w3school/i;
/w3school/i 是一个正则表达式。
w3school 是模式（pattern）（在搜索中使用）。
i 是修饰符（把搜索修改为大小写不敏感）。
*/
// 多行搜索
var str = "\nIs th\nis it?";
var patt1 = /^is/m;
var result = str.match(patt1);
console.log(result)

// [abc]	查找方括号之间的任何字符。
var str = "Is this all there is?";
var patt1 = /[h]/g; 
var result = str.match(patt1);
console.log(result) // [ 'h', 'h' ]

// [0-9]	查找任何从 0 至 9 的数字。
var str = "123456789";
var patt1 = /[1-4]/g;
var result = str.match(patt1);  
console.log(result) // [ '1', '2', '3', '4' ]

/*
\d	查找数字。	
\s	查找空白字符。	
\b	匹配单词边界。

n+	匹配任何包含至少一个 n 的字符串。
n*	匹配任何包含零个或多个 n 的字符串。	
n?	匹配任何包含零个或一个 n 的字符串。
*/
var str = "Hellooo World! Hello W3School!"; 
var patt1 = /lo*/g;
var result = str.match(patt1);
console.log(result) // [ 'l', 'looo', 'l', 'l', 'lo', 'l' ]

// test() 是一个正则表达式方法。
var patt = /e/;
var result = patt.test("The best things in life are free!"); 
console.log(result) // true

/*
使用 exec()
exec() 方法是一个正则表达式方法。
它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。
如果未找到匹配，则返回 null。
*/
var patt = /e/;
var result = patt.exec("The best things in life are free!"); 
console.log(result)
/*
[
  'e',
  index: 2,
  input: 'The best things in life are free!',
  groups: undefined
]
*/