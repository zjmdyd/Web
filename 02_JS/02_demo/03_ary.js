let ary = [{
    name: 'a'
  },
  {
    name: 'b'
  },
]

for (let i in ary) {
  var item = ary[i]
  console.log(item)
  console.log(item.name)
  item.age = i
  console.log(item.age)
}
console.log(ary)