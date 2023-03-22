// const ary = [1, 3, 5, 7]

// for (let i = 0; i < ary.length; i++) {
//   if (i == 2) {
//     continue  // 会越过i = 2这个元素
//   }
//   console.log(ary[i])
// }

function createData (level = 4, baseKey = '') {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = '' + baseKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel (level) {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

createData(4)


