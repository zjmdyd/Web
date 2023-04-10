"use strict";

var obj = {
  key: 'countryList',
  subValueKey: 'id',
  changeSubKey: 'companyCountryList'
};
/*
 */

for (key in obj) {
  console.log(key, obj[key]);
}

console.log('******change key****');

for (key in obj) {
  // if (key === 'key') {
  obj[key] = obj.changeSubKey; // 'companyCountryList'
  // }
  // console.log(key, obj[key])
}

for (key in obj) {
  console.log(key, obj[key]);
}