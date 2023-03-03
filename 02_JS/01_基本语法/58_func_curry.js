function add(a, b, c) {
  return a + b + c
}

function _add(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
const s1 = add(1, 2, 3)
console.log(s1)
const s2 = _add(1)
console.log(s2)