const ary = [1, 3, 5, 7]

for (let i = 0; i < ary.length; i++) {
  if (i == 2) {
    continue  // 会越过i = 2这个元素
  }
  console.log(ary[i])
}