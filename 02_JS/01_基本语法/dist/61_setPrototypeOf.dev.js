"use strict";

var obj1 = {
  a: 1
}; // obj2的原型是obj1

var obj2 = Object.create(obj1);
Object.getPrototypeOf(obj2) === obj1; // true

obj2.a; // 1

var obj3 = {
  b: 2
}; // 修改obj2的原型为obj3

Object.setPrototypeOf(obj2, obj3);
Object.getPrototypeOf(obj2) === obj3; // true

obj2.a; // undefined

obj2.b; // 2