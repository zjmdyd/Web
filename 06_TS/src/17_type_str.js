document.title = 'TS学习';
/*
1、queryselector (selector)：获取某一个DOM元素
document 对象：文档对象(整个页面)，是操作页面内容的入口对象
selector 参数：是一个css选择器（标签、类、id选择器等）
*/
// let title = document.querySelector('#title')
// 需要通过类型断言来指定DOM元素的具体类型，才可以使用innerText属性
var title = document.querySelector('#title');
// let elm = document.querySelector('p')
var elm = document.querySelector('p');
var elms = document.querySelectorAll('p');
console.log('title = ');
console.log(title);
// 实现追加内容
title.innerText += ' welcome';
console.log(title.innerText);
console.log(elm);
elm.style.fontSize = '30px';
elm.style.color = 'red';
/*
dom.classList属性：类样式操作，也就是操作类名，比如，添加类名、移除类名等。
它包含三个常用方法：添加、移除、判断是否存在

参数表示：要移除的类名，可以同时移除多个。
dom.classListremove(类名1，类名2， ...)
【判断类名是否存在】
let has = dom.classList.contains(类名)
*/
elm.classList.add('b', 'c');
console.log('elms');
console.log(elms);
function handleEvent(ele, event) {
    console.log('调用了handleEvent方法');
    console.log(ele);
}
function btnEvent(e) {
    console.log('按钮点击了:' + e);
}
// function greeter(person: string) {
//   return "Hello, " + person;
// }
// let str1 = "Jane User";
// document.body.innerHTML = greeter(str1);
handleEvent(document.getElementById('hello'), 'click'); // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
