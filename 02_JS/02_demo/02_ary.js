const funcObjs = [{
        name: 'Company',
        exe_func: 'getCompanyList'
    },
    {
        name: 'Contact"',
        exe_func: 'getContactList'
    },
    {
        name: 'Deal"',
        exe_func: 'getDealTagList'
    },
    {
        name: 'Industry',
        exe_func: 'getIndustryList'
    },
    {
        name: 'OtherTag',
        exe_func: 'getOtherTagList'
    },
    {
        name: 'Priority',
        exe_func: 'getPriorityList'
    },
    {
        name: 'Region',
        exe_func: 'getRegionList'
    },
]

for (let item in funcObjs) {
    // console.log(item)
}

var matchItem = funcObjs.filter(function (item) {
    if (item.name === 'Company') {
        console.log('匹配到')
        return item; // 3的元素跳过
    }
});
console.log('matchItem1 = ')
console.log(matchItem)

var matchItem = funcObjs.filter(function (item) {
    if (item.name === 'Region') {
        console.log('匹配到')
        return item; // 3的元素跳过
    }
});

console.log('matchItem2 = ')
console.log(matchItem)