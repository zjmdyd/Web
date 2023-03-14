declare const data: {
    id: number;
    title: string;
};
declare function get<T extends object, K extends keyof T>(o: T, name: K): T[K];
