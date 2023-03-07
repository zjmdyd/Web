/*
请使用关键字 class 创建一个类。
请始终添加一个名为 constructor() 的方法
构造方法

构造方法是一种特殊的方法：
它必须有确切的名称的 “constructor”
创建新对象时自动执行
用于初始化对象属性
如果您没有定义构造方法，JavaScript 会添加一个空的构造方法。

创建类方法的语法与对象方法相同。
*/
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
// static 类方法是在类本身上定义的。
// 您不能在对象上调用 static 方法，只能在对象类上调用
    // 静态方法
    static hello(x) {
        return "Hello!!" + x.carname;
    }
}

/*
与函数和其他 JavaScript 声明不同，类声明不会被提升。
这意味着您必须先声明类，然后才能使用它
*/
let myCar = new Model("Ford", "Mustang")
console.log(myCar.show())
console.log(Model.hello(myCar))
