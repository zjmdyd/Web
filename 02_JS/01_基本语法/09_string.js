/*
模板字面量使用反引号 (``) 而不是引号 ("") 来定义字符串：
*/
var text = `Hello World!`;
console.log(text)

// 模板字面量允许多行字符串：
var text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text)

// 普通字符串需要通过'\'实现换行
var text ='The quick \
brown fox \
jumps over \
the lazy dog';
console.log(text)

var firstName = "Bill";
var lastName = "Gates";
var text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)   // Welcome Bill, Gates!
firstName = "Mark"
console.log(text)   // Welcome Bill, Gates!
