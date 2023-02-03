/*
apply() 方法与 call() 方法非常相似：
*/
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates",
}
var n = person.fullName.apply(person1);  // 将返回 "Bill Gates"
console.log(n)

/*
call() 和 apply() 之间的区别
不同之处是：
call() 方法分别接受参数。
apply() 方法接受数组形式的参数。
如果要使用数组而不是参数列表，则 apply() 方法非常方便。
*/
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"Bill",
    lastName: "Gates"
  }
  var n2 = person.fullName.apply(person1, ["Oslo", "Norway"]);
  console.log(n2)

/*
在数组上模拟 max 方法
您可以使用 Math.max() 方法找到（数字列表中的）最大数字：
*/
let m1 = Math.max.apply(null, [1,2,3]); // 也会返回 3
console.log(m1)
// 第一个参数（null）无关紧要。在本例中未使用它。
let m2 = Math.max.apply(Math, [1,2,3]); // 也会返回 3
console.log(m2)
let m3 = Math.max.apply(" ", [1,2,3]); // 也会返回 3
console.log(m3)