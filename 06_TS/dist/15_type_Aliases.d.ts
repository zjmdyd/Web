type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
declare function get_Name(n: NameOrResolver): Name;
declare const str: string;
