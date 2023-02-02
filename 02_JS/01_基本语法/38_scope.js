/*
自动全局
如果您为尚未声明的变量赋值，此变量会自动成为全局变量
注意此种情况是赋值在前, 赋值之前变量还未声明
*/
myFunction();

// 此处的代码可以把 carName 作为全局变量使用。
var msg = "我可以显示 " + carName;
console.log(msg)
function myFunction() {
    carName = "porsche";
}
