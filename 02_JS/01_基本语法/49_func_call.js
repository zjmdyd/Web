/*
call() 方法是预定义的 JavaScript 方法。
它可以用来调用所有者对象作为参数的方法。
通过 call()，您能够使用属于另一个对象的方法。
*/

var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates",
}
var person2 = {
    firstName:"Steve",
    lastName: "Jobs",
}
var n = person.fullName.call(person1);  // 将返回 "Bill Gates"
console.log(n)

// 带参数的 call() 方法
// call() 方法可接受参数：
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"Bill",
    lastName: "Gates"
  }
  var n2 = person.fullName.call(person1, "Seattle", "USA");
  console.log(n2)