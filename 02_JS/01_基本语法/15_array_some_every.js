/*
forEach() 本身是不支持的 continue 与 break 语句
通过 some 和 every 来实现。

some() 方法用于检测数组中的元素是否满足指定条件.
如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回false。

every() 方法用于检测数组所有元素是否都符合指定条件.
如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
如果所有元素都满足条件，则返回 true。
*/ 

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    console.log('当前遍历的元素是: ' + age);
    return age >= 18;
}

var hasAudlt = ages.some(checkAdult);
console.log('hasAudlt = ' + hasAudlt);  // hasAudlt = true

var allAudlt = ages.every(checkAdult);
console.log('allAudlt = ' + allAudlt);  // allAudlt = false