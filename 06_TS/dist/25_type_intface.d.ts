interface A {
    a: number;
}
interface A {
    b: number;
}
declare const a3: A;
type C = {
    name: string;
};
type D = {
    age: number;
};
type User = C & D;
declare let stu0: User;
