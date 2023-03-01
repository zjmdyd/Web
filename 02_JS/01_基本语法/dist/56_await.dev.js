"use strict";

/*
Await 语法
函数前的关键字 await 使函数等待 promise：

let value = await promise;
await 关键字只能在 async 函数中使用。
*/
function myDisplay() {
  var myPromise, res;
  return regeneratorRuntime.async(function myDisplay$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          myPromise = new Promise(function (myResolve, myReject) {
            setTimeout(function () {
              console.log("触发延时任务");
              myResolve("I love You!!");
            }, 3000);
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(myPromise);

        case 3:
          res = _context.sent;
          console.log(res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

myDisplay();