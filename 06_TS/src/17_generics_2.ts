type A_Record<K extends keyof any, T> = {
  [P in K]: T;
};

declare type A_StateTree = A_Record<string | number | symbol, any>;
const aa:A_StateTree = {'a': 1, 'b': 2}
console.log(aa)