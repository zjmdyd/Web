"use strict";

var person = {
  firstName: "Bill",
  lastName: "Gates",
  id: 678,
  // 方法
  // 在对象方法中，this 指的是此方法的“拥有者”。
  fullName: function fullName() {
    return this.firstName + " " + this.lastName;
  }
}; // 函数
// 在函数中，this 指的是全局对象 [object Window]。

function myFunc() {}