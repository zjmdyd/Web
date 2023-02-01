var mySearch = function (source, subString) {
    return source.search(subString) != -1;
};
console.log(mySearch('welcome', 'w')); // true
// 可选参数
// 需要注意的是，可选参数必须接在必需参数后面。
// 换句话说，可选参数后面不允许再出现必需参数了：
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom1', 'Cat');
var tom = buildName('Tom1');
console.log(tomcat);
console.log(tom);
// 在 ES6 中，我们允许给函数的参数添加默认值，
// TypeScript 会将添加了默认值的参数识别为可选参数
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat2'; }
    return firstName + ' ' + lastName;
}
var tomcat2 = buildName2('Tom2', 'Cat');
var tom2 = buildName2('Tom2');
console.log(tomcat2);
console.log(tom2);
// 此时(有默认值时)就不受「可选参数必须接在必需参数后面」的限制了：
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom3'; }
    return firstName + ' ' + lastName;
}
var tomcat3 = buildName3('Tom3', 'Cat');
console.log(tomcat3);
var cat = buildName3(undefined, 'Cat');
console.log(cat);
