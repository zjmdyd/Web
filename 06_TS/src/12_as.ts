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
    if(typeof(animal as Fish).swim === 'function') {
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
console.log(isFish(fish))
fish.swim()
