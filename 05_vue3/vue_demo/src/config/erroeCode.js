export default {
  401: 'Authentication failed. The system resources cannot be accessed. Procedure',
  403: 'The current operation has no permission',
  404: 'The access resource does not exist',
  default: 'The system does not know the error. Please report the error to the administrator'
}

export const AppKey = '123456'

/*
  export特点
① 导出时需要和导入的变量名称相同
② 如果导出和定义变量分开，导出时变量名加{}
③ 导入的时候变量名必须加{}
④ 可以有多个export语句
*/ 

/* 
  export default特点：
① 引入时，可以变成不同的名称
② 直接把所有内容都导出
③ 引入时，设置的变量名不用加{}
④ 只能有一个export default语句
*/