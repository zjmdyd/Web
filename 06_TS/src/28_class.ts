class Animal1 {
  private age?: string;
  static num = 42;  // 静态属性
  protected constructor(name: string) {
    this.name = name;
  }
  // public name: string;
  /*
  ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7 提案中可以直接在类里面定义：
  */
  name = 'Jack';
}
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
// }
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}
// let an = new Animal1('Pike');
let an = new Cat('Pike');
console.log(an.name)
/*
public private 和 protected§
TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

当构造函数修饰为 private 时，该类不允许被继承或者实例化：
当构造函数修饰为 protected 时，该类只允许被继承：
*/
