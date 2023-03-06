/*
三、JS 中的 undefined 和 null 的区别有：

1、相同点

1）都是原始类型的值，且保存在栈中变量本地
2）进行条件判断时，两者都是false：
        console.log(undefined == null);//true ECMAScript认为undefined是null派生出来的，所以定义他们值是相同的
2、不同点

1）null是js的关键字，表示空值；undefined不是js的关键字，它是一个全局变量
2）null是Object的一个特殊值，如果一个Object为null，表示这个对象不是有效对象，null是一个不存在的对象的占位符；undefined是Globel的一个属性

    null == undefined    // true
    null === undefined     // false
实际上，undefined 值是派生自 null 值的，ECMAScript 标准规定对二者进行相等性测试要返回 true，可以理解为 null 和 undefined 都代表着无效的值，所以二者相等，但由于是两种不同的原始数据类型，所以不全等。
3）类型不一样：
 typeof(null) // object
 typeof(undefined) //undefined
*/