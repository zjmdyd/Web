/*
默认的 case 不必是 switch 代码块中最后一个 case，
但基本不实用
*/
switch (new Date().getDay()) {
    default: 
        text = "期待周末！";
        console.log("执行default");
         break;
    case 6:
        text = "今天是周六";
        console.log("执行case6");
        break; 
    case 0:
        console.log("执行case0");
        text = "今天是周日";
} 
// 输出结果:
// 执行default


/*
Switch case 使用严格比较（===）。

值必须与要匹配的类型相同。

只有操作数属于同一类型时，严格比较才能为 true
*/
var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}