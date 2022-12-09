var array = ['a', 'b', 'c'];

// 非箭头函数
array.forEach(function(element) {
    console.log('function函数体:' + element)
});

// 箭头函数
array.forEach((element, index) => {
    console.log('箭头函数' + index + ':' + element)
}, this);

// this参数
this.name = 'gg'
array.forEach((element, index) => {
    console.log(this.name + index + ':' + element)
}, this);

// continue与break
var arr = [1, 2, 3, 4, 5];

// continue的实现
arr.forEach(function (item) {
    if (item === 3) {
        return; // 3的元素跳过
    }
    console.log(item);
});

console.log('**********')
var val = arr.some(function(item) {
    if(item === 2) {
        return;
    }
    console.log(item);
});

console.log('****break示例******')
// break的实现
arr.every(function(item) {
    console.log(item);
    return item != 3;   // every条件不满足时，every方法会跳出
})