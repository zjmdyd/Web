"use strict";

/*
Proxy对象用于创建一个对象的代理，是用于监听一个对象的相关操作。代理对象可以监听我们对原对象的操作。
接下来我们将通过一个监听对象的属性操作来认识学习下什么是Proxy。
Proxy对象需要传入两个参数，分别是需要被Proxy代理的对象和一系列的捕获器
*/
var obj = {
  name: '_island'
};
var objProxy = new Proxy(obj, {});
console.log(objProxy);