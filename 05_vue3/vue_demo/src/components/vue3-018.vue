<template>
  <div></div>
</template>

<script setup>

/*
Proxy对象用于创建一个对象的代理，是用于监听一个对象的相关操作。代理对象可以监听我们对原对象的操作。
接下来我们将通过一个监听对象的属性操作来认识学习下什么是Proxy。
Proxy对象需要传入两个参数，分别是需要被Proxy代理的对象和一系列的捕获器
*/
const obj = {
  name: '_island',
  foo: function() {
    return this === objProxy
  }
}

const objProxy = new Proxy(obj, {
  // get捕获器
  get: function (target, key) {
    console.log(`捕获到对象获取${key}属性的值操作`);
    return target[key];
  },
  // set捕获器
  set: function (target, key, val) {
    console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
    target[key] = val;

    return true
  }
});
console.log(objProxy);
console.log(objProxy.name = "哈哈哈");
console.log(objProxy.name);
console.log(obj.foo()); // false
console.log(objProxy.foo()); // true
/*
this指向的问题
Proxy对象可以对我们的目标对象进行访问，但没有做任何拦截时，也不能保证与目标对象的行为一致，
因为目标对象内部的this会自动改变为Proxy代理对象
*/  

/*
在ES5中使用Object.defineProperty（对象属性描述符）对对象的监听，
将一个对象进行遍历，并设定getter、setter方法进行监听和拦截。

// 定义一个Object对象
const obj = {
  name: "_island",
  age: 18
};

Object.keys(obj).forEach((key) => {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(key + "调用了get方法");
      return val;
    },
    set: function (newVal) {
      console.log(key + "调用了set方法");
      val = newVal;
    }
  });
});

// 操作obj对象
obj.name = "QC2125";
// name调用了set方法
obj.age = 30;
// age调用了set方法
console.log(obj.name); 
// name调用了get方法
// QC2125

Object.defineProperty的设计初衷并不是为了去监听拦截一个对象中的属性，且他也实现不了更加丰富的操作，
例如添加、删除属性等操作。所以在ES6中新增了Proxy对象，用于监听Object、Function的操作
*/

/*
proxy是一个的代理对象，它可以代理我们对原目标的操作。
相比Object.defineProperty方法，Proxy监听的事件更加方便。
*/

</script>