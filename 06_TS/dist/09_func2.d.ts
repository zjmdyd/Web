interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare let mySearch: SearchFunc;
declare function buildName(firstName: string, lastName?: string): string;
declare let tomcat: string;
declare let tom: string;
declare function buildName2(firstName: string, lastName?: string): string;
declare let tomcat2: string;
declare let tom2: string;
declare function buildName3(firstName: string | undefined, lastName: string): string;
declare let tomcat3: string;
declare let cat: string;
