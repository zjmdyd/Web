const obj = [{
    key: 'fullName'
  },
  {
    key: 'name'
  },
  {
    key: 'countryList',
    type: 2,
    changeSubKey: 'companyCountryList',
  }
]

/*

*/
for (key in obj) {
  console.log(key, obj[key])
}
console.log('******change key****')

const keyItem = obj[2]
keyItem[keyItem.key] = 'companyCountryList'

for (key in obj) {
  console.log(key, obj[key])
}
// for (key in obj) {
//   if (key === 2) {
//     obj[key] = obj.changeSubKey // 'companyCountryList'
//   }
// }

// for (key in obj) {
//   console.log(key, obj[key])
// }