type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};
type petGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name: string;
    age: number;
}
type IPets = MyRecord<petGroup, IPetInfo>;
declare const animals: IPets;
