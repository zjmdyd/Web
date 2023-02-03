// 未使用箭头函数
hello1 = function() {
    return "Hello World!";
}

// 使用箭头函数
hello2 = () => {
    return "Hello World!";
}

// 如果函数只有一个语句，并且该语句返回一个值，则可以去掉括号和 return 关键字：
// 注释：这仅在函数只有一条语句时才有效。

hello3 = () => "Hello World!";
console.log(hello3())

// 如果您有参数，则将它们传递到括号内：
// 带参数的箭头函数：
hello4 = (val) => "Hello " + val;
console.log(hello4('baby'))

// 事实上，如果只有一个参数，您也可以略过括号：
// 不带括号的箭头函数：
hello5 = val => "Hello " + val;
console.log(hello5('meimei'))
// 对于箭头函数，this 关键字始终表示定义箭头函数的对象。
