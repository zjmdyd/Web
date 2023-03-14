type Keys = 'name' | 'sex';
type Dukey = {
    [key in Keys]: string;
};
declare let stu: Dukey;
