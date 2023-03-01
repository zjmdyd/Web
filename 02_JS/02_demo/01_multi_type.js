var arr = [{
        name: 'a',
        age: '18'
    },
    {
        name: 'b',
        age: '19'
    },
    {
        name: 'c',
        age: '20'
    }
];
const aa = arr.map(function (item, index) {
    if (item.name == 'b') {
        console.log(index) // 1
        return item.age
    }
})

console.log(aa)