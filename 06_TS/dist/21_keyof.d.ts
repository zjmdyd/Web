type People = {
    id: number;
    name: string;
    age: number;
};
declare let p1: People;
declare let v0: number;
declare let v1: number;
type TypeKeys = keyof People;
declare const p_n: TypeKeys;
declare const p_a: TypeKeys;
type TypeValue = People[keyof People];
declare let a0: TypeValue;
declare let a1: People['id'];
declare let a2: People['name'];
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
type P0 = MyPick<People, 'id' | 'name'>;
type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
type P1 = MyReadOnly<People>;
type MyOmit<T, K> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
type P2 = MyOmit<People, 'id'>;
type MyAppend<T, U extends keyof any, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V;
};
type P3 = MyAppend<People, 'address', string>;
type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
    [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never;
};
type Skill = {
    phone: string;
    run: () => void;
};
type P4 = Merge<People, Skill>;
