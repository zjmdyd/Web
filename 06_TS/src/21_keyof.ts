const data = {
  id: 100,
  title: 'hello'
}

// 使用 typescript 实现一个 get 函数来获取它的属性值
// 使用 keyof 来加强 get 函数的类型功能
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
  // return o.name // 此处只能用中括号取值，不能用点方法
}

console.log(get(data, 'id'))
/*
点和中括号取值的区别:
1.点方法后面跟的必须是一个指定的属性名称，中括号里面可以是变量
2.中括号里面的属性可以是数字，点方法后面的属性名不能是数字
3.动态为对象添加属性时，只能用中括号
*/ 