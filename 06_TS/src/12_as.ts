// 类型断言
// 语法: 值 as 类型或<类型>值，推荐前者

// 类型断言的用途
// 将一个联合类型断言为其中一个类型
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型中共有的属性或方法
function getName(animal: Cat | Fish) {
    return animal.name;
}
// 有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法
/*
function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {    // 报错：Property 'swim' does not exist on type 'Cat'.
        return true;
    }
    return false;
}
*/
// 此时可以使用类型断言，将 animal 断言成 Fish：
function isFish(animal: Cat | Fish) {
    if(typeof((animal as Fish).swim) === 'function') {
        return true
    }
    return false
}
let fish: Fish = {
    name: '草鱼',
    swim() {
        console.log('I am swimming');
    }
}

function go(animal: Cat | Fish) {
    (animal as Fish).swim();
}

console.log(isFish(fish))
fish.swim()
go(fish)

const tom3: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
// 此处编译不会报错，但在运行时会报错
// 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况
// go(tom3)    
