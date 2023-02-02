function myFunction(x) {
    try { 
        if(x == "") throw "x为空";
        if(isNaN(x)) throw "x不是数字";
        x = Number(x);
        if(x < 5) throw  "太小";
        if(x > 10) throw "太大";
    }
    catch(err) {
        console.log("异常, 输入是:" + err)
    }
    finally {
        console.log('不管有没错，finally都会执行')
    }
}
myFunction('g')