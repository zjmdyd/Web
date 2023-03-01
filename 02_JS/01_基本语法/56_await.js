/*
Await 语法
函数前的关键字 await 使函数等待 promise：

let value = await promise;
await 关键字只能在 async 函数中使用。
*/
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(() => {
            console.log("触发延时任务");
            myResolve("I love You!!");
        }, 3000);
    })
    let res = await myPromise
    console.log(res)
}
myDisplay()
