// 程序的运行结果为：100  10  100
var a = 10;

function testA() {
    a = 100;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}
testA();

/*
解析：Javascript在执行前会对整个脚本文件的声明部分做完整分析(包括局部变量)，从而确定变量的作用域，所以在函数test执行前，由于第6行声明了局部变量a，所以函数内部的a都指向已经声明的局部变量，所以第4行输出100。第5行输出this.a，我们都知道，函数内部的this指针指向的是函数的调用者，在这里函数test被全局对象调用，所以this指针指向全局对象（这里即window），所以this.a = window.a，一开始生命了全局变量a=10，所以第5行输出结果为10。第7行输出结果为100，因为局部变量a在第3行已经被赋值了100，所以直接输出局部变量a的值。 */

console.log("**----B----**")

// 程序的运行结果为：undefined  10
var b = 100;

function testB() {
    console.log(b);
    var b = 10;
    console.log(b);
}
testB();

console.log("**----C----**")

var c = 100;

function testC() {
    console.log(c);
    c = 10;
    console.log(c);
}
testC();
console.log(c);

/*
解析：我们知道在函数内部，一般用var声明的为局部变量，没用var声明的一般为全局变量，在test函数内，a=10声明了一个全局变量，所以第3行的a应该输出全局变量的值，而在函数执行之前已经声明过一个全局变量并赋值100，所以这里第上输出100。第4行给全局变量a 重新赋值10，所以全局变量a的值变成10，所以第5行输出10。而在函数test外部，第8行输出全局变量a的值，因为全局变量被重新赋值为10，所以输出结果即为10。
*/

/*
如果重新声明 JavaScript 变量，该变量的值不会丢失：
在以下两条语句执行后，变量 carname 的值依然是 "Volvo"
*/
var carname = "Volvo";
var carname;
console.log(carname)
