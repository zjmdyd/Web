 const a = "[\"http://baidu.com\", \"http:hao123.com\"]"
 const str = JSON.stringify(a)
 const b = JSON.parse(a)
 console.log(str)
 console.log(b)
 const c = JSON.stringify(b)
 console.log(c)