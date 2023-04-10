var obj = {
  name: 'mm',
  age: '10'
}
console.log(obj)
obj['id'] = 10
console.log(obj)

console.log(obj.name)     // mm
console.log(obj['name'])  // mm

// 当key为变量时, 点语法无法取值, 中括号语法可正常取值;
var key = 'age'
console.log(obj.key)  // undefined
console.log(obj[key]) // 10

/*
 总结：
点操作符（.）: 静态的。

1、后面必须是一个以属性名命名的简单标识符；

2、标识符必须直接出现在js程序中，它们不是数据类型，因此程序无法修改它们。

中括号操作符（[]）: 动态的。

1、方括号里必须是一个计算结果为字符串的表达式，属性名通过字符串表示；

2、字符串是js的数据类型，在程序运行时可以修改和创建它们。
*/