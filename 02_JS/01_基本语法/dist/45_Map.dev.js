"use strict";

/*
Map 对象存有键值对，其中的键可以是任何数据类型。

Map 对象记得键的原始插入顺序。

Map 对象具有表示映射大小的属性。
*/
// 返回
var apples = {
  name: 'Apples'
};
var bananas = {
  name: 'Bananas'
};
var oranges = {
  name: 'Oranges'
};
/*
// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
*/
// 创建新的 Map
// 初始化Map需要一个二维数组，或者直接初始化一个空Map

var fruits = new Map([[apples, 500], [bananas, 300], [oranges, 200]]);
console.log(fruits.get(apples)); // 500

/*
[Map Entries] {
  [ { name: 'Apples' }, 500 ],
  [ { name: 'Bananas' }, 300 ],
  [ { name: 'Oranges' }, 200 ]
}
*/

console.log(fruits.entries());
console.log(fruits.values()); // [Map Iterator] { 500, 300, 200 }

/*
[Map Iterator] {
  { name: 'Apples' },
  { name: 'Bananas' },
  { name: 'Oranges' }
}
*/

var keys = fruits.keys();
console.log(keys);
console.log(keys.next().value); // Map.size 返回 Map 中元素的数量：

console.log(fruits.size); // 3