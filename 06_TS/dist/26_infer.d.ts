type Foo<T> = T extends {
    t: infer Test;
} ? Test : string;
type One = Foo<number>;
type Two = Foo<{
    t: boolean;
}>;
type Three = Foo<{
    a: number;
    t: () => void;
}>;
type InferArray<T> = T extends (infer U)[] ? U : never;
type I0 = InferArray<[number, string]>;
type I1 = InferArray<string[]>;
type I2 = InferArray<number[]>;
type I3 = InferArray<never>;
type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _] ? P : never;
type I4 = InferFirst<[1, 2, 1]>;
type InferLast<T extends unknown[]> = T extends [...infer _, infer Last] ? Last : never;
type I5 = InferLast<[3, 2, 1]>;
type InferParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;
type I6 = InferParameters<((arg1: string, arg2: number) => void)>;
type InferReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;
type I7 = InferReturnType<() => string>;
type InferPromise<T> = T extends Promise<infer U> ? U : never;
type I8 = InferPromise<Promise<string>>;
type InferString<T extends string> = T extends `${infer First}${infer _}` ? First : [];
type I9 = InferString<"Johnny">;
type User_2 = {
    id: number;
    name: string;
};
type ProperType<T> = T extends {
    id: infer U;
    name: infer R;
} ? [U, R] : T;
type U0 = ProperType<User_2>;
type ProperType_1<T> = T extends {
    id: infer U;
    name: infer U;
} ? U : T;
type U1 = ProperType_1<User_2>;
type ProperType_2<T> = T extends {
    a: (x: infer U) => void;
    b: (x: infer U) => void;
} ? U : never;
type U2 = ProperType_2<{
    a: (x: string) => void;
    b: (x: number) => void;
}>;
type ProperType_3<T> = T extends {
    a: (x: infer U) => void;
    b: (x: infer R) => void;
} ? [U, R] : never;
type U3 = ProperType_3<{
    a: (x: string) => void;
    b: (x: number) => void;
}>;
type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer R) => void ? R : never;
type V0 = {
    a: 'a';
} | {
    b: 'b';
};
type T2 = UnionToIntersection<V0>;
type K0 = {
    name: string;
};
type K1 = {
    age: number;
};
type K2 = K0 & K1;
declare let k2: K2;
declare let k0: K0;
interface Props {
    a: (x: K0) => void;
    b: (x: K1) => void;
}
type T3 = ProperType_2<Props>;
