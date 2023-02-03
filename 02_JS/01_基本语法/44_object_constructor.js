// 对象构造器函数
function Person(first, last, age, eye) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eye = eye
}

var pa = new Person("Bill", "Gates", 62, "blue");
var pb = new Person("Steve", "Jobs", 56, "green");

// 与向已有对象添加新属性不同，您无法为对象构造器添加新属性：
Person.nationality = "English";
console.log(Person)

// 为已有的对象添加新属性很简单：
pa.nationality = "China";

/*
Person {
  firstName: 'Bill',
  lastName: 'Gates',
  age: 62,
  eye: 'blue',
  nationality: 'English'
}
*/
console.log(pa)
// Person { firstName: 'Steve', lastName: 'Jobs', age: 56, eye: 'green' }
console.log(pb)
console.log(pb.nationality) // undefined

var pc = new Person("Steve", "Jobs", 16, "yellow");

/*
使用 prototype 属性
JavaScript prototype 属性允许您为对象构造器添加新属性：
*/
Person.prototype.nationality = "Tang";
console.log(pc)
console.log(pc.nationality) // Tang