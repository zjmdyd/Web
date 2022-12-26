var a = ~5;
console.log("a = " + a);    // a = -6

var b = 5 & 1;
console.log("b = " + b);    // b = 1

/*
0101
0001
0001
*/

function isOdd(num) {
    return num & 1;
}

var c = isOdd(5);
var d = isOdd(6);
console.log("c = " + c);    // c = 1
console.log("d = " + d);    // d = 0

/*
<<	零填充左位移	通过从右推入零向左位移，并使最左边的位脱落。
>>	有符号右位移	通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。
>>>	零填充右位移	通过从左推入零来向右位移，并使最右边的位脱落。
*/

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

var e = dec2bin(10);
console.log("e = " + e);    // 1010

function dec2Hex(dec) {
    return (dec >>> 0).toString(16);
}

var g = dec2Hex(10);
console.log("g = " + g);    // g = a


