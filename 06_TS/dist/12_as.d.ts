interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
declare function getName(animal: Cat | Fish): string;
declare function isFish(animal: Cat | Fish): boolean;
declare let fish: Fish;
declare function go(animal: Cat | Fish): void;
declare const tom3: Cat;
