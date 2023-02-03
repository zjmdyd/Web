const letters = new Set(['a', 'b', 'c'])
console.log(letters)        // Set(3) { 'a', 'b', 'c' }
console.log(letters.size)   // 3
letters.add('d')
// 如果在set添加相等的元素，则只会保存第一个元素
letters.add('d')
console.log(letters)        // Set(4) { 'a', 'b', 'c', 'd' }