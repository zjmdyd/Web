// 用接口定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) != -1
}
console.log(mySearch('welcome', 'w'))   // true

// 可选参数
// 需要注意的是，可选参数必须接在必需参数后面。
// 换句话说，可选参数后面不允许再出现必需参数了：
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom1', 'Cat');
let tom = buildName('Tom1');
console.log(tomcat)
console.log(tom)

// 在 ES6 中，我们允许给函数的参数添加默认值，
// TypeScript 会将添加了默认值的参数识别为可选参数
function buildName2(firstName: string, lastName: string = 'Cat2') {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom2', 'Cat');
let tom2 = buildName2('Tom2');
console.log(tomcat2)
console.log(tom2)

// 此时(有默认值时)就不受「可选参数必须接在必需参数后面」的限制了：
function buildName3(firstName: string = 'Tom3', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat3 = buildName3('Tom3', 'Cat');
console.log(tomcat3)
let cat = buildName3(undefined, 'Cat');
console.log(cat)