// async 使函数返回 Promise
// await 使函数等待 Promise

/*
函数前的关键字 async 使函数返回 promise：
*/
async function myFunction() {
    // return "Hello";
    return Promise.reject("出现Error");
}
/* 等同于：
async function myFunction() {
  return Promise.resolve("Hello");
}
*/

// 以下是使用 Promise 的方法：
myFunction().then(
    function (value) {
        /* 成功时的代码 */
        myDisplayer(value)
    },
    function (error) {
        /* 出错时的代码 */ 
        myDisplayer(error)
    }
);

function myDisplayer(some) {
    console.log('进入myDisplayer方法')
    console.log(some)
}
