interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: string | number | undefined;
}
declare let tam: Person;
declare let mike: Person;
