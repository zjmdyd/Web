"use strict";

var obj = {
  "id": 12,
  "count": null,
  "countryList": [{
    "id": 1,
    "name": "a",
    "regionId": 3,
    "industryId": null,
    "count": null
  }, {
    "id": 1,
    "name": "b",
    "regionId": 3,
    "industryId": null,
    "count": null
  }]
};
var ary = obj.countryList;
console.log(ary);
var names = ary.map(function (item) {
  return item.name;
}).join(',');
console.log(names);