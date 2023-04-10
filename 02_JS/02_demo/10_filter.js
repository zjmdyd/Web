
const ary = [0, 0, 1, 1, 2, 2, 2]
var items = []
for (var i = 0; i < ary.length; i += sItems.length) {
  const item = ary[i]
  var sItems = ary.filter((sItem) => {
    return item === sItem
  })
  items.push(sItems)
}

console.log(items)  // [ [ 0, 0 ], [ 1, 1 ], [ 2, 2, 2 ] ]