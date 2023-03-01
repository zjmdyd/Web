"use strict";

// async 使函数返回 Promise
// await 使函数等待 Promise

/*
函数前的关键字 async 使函数返回 promise：
*/
function myFunction() {
  return regeneratorRuntime.async(function myFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.reject("出现Error"));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}
/* 等同于：
async function myFunction() {
  return Promise.resolve("Hello");
}
*/
// 以下是使用 Promise 的方法：


myFunction().then(function (value) {
  /* 成功时的代码 */
  myDisplayer(value);
}, function (error) {
  /* 出错时的代码 */
  myDisplayer(error);
});

function myDisplayer(some) {
  console.log('进入myDisplayer方法');
  console.log(some);
}