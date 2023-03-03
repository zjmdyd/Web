var obj = {
  z: 1
}
var obj1 = {
  z: 2
}

function fn(x, y) {
  console.log('x = ' + x)
  console.log('y = ' + y)
  console.log('this.z = ' + this.z)
  console.log(x + y + this.z)
}

// fn.call(obj, 2, 3)
// fn.apply(obj, [2, 3])

// bind返回一个绑定了this的新函数boundFcuntion
// boundFunction的this无法再被修改
var bound = fn.bind(obj, 2)
// bound(3)

//尝试修改bind返回函数的this无效
bound.call(obj1, 4)