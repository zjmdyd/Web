declare function createArray(length: number, value: any): Array<any>;
declare var ary1: any[];
declare function createArray2<T>(length: number, value: T): Array<T>;
declare const ary2: string[];
declare function swap<T, U>(tuple: [T, U]): [U, T];
declare const seven_7: [string, number];
interface Lengthwise {
    length: number;
}
declare function loggingIdentity<T extends Lengthwise>(arg: T): T;
declare function copyFields<T extends U, U>(target: T, source: U): T;
declare let x: {
    a: number;
    b: number;
    c: number;
    d: number;
};
declare const obj: {
    a: number;
    b: number;
    c: number;
    d: number;
};
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
declare let createArray1: CreateArrayFunc<any>;
declare class GenericNumber<T> {
    zeroValue: T;
    arr: T[];
    constructor(val: T);
    add(x: T, y: T): void;
    add1: (x: T, y: T) => void;
    add2: (x: T, y: T) => T;
    min(): T;
}
declare let myGenericNumber: GenericNumber<number>;
