function myDisplayer(some) {
    console.log(some)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 6, myDisplayer);

// setInterval()和clearInterval()
var count = 0;
var tID = setInterval(() => {
    let d = new Date();
    let str = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    console.log(str)
    if(count++ > 5) {
        clearInterval(tID)  // 取消定时器
    }
}, 1000);

