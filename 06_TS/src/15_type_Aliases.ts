type Name = string;
// type NameResolver = (s: string) => string; //带参的
type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;
function get_Name(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    console.log('n = ')
    console.log(n)
    // return n('gg');  // 带参的
    return n();  // 不带参的
  }
}

const str = get_Name(
  // 带参的
  // function(s: string): string {
  //   console.log('s = ') 
  //   console.log(s)  // s = gg
  //   return '哈哈'
  // }
  // 不带参的
  // function(): string {
  //   return '哈哈'
  // }
  // 箭头函数
  (): string => {
    return '哈哈'
  }
)

console.log(str)