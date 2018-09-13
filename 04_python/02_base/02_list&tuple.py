#!/usr/bin/env python3
# -*- coding: utf-8 -*-

##
#	list是一个可变的有序表 
##
classmates = ['Michael', 'Bob', 'Tracy']
print(classmates)
print(len(classmates))
print(classmates[-1])		#还可以用-1做索引，直接获取最后一个元素,负数表示倒数第几个,也会存在越界
classmates.append('haha')	#追加
print(classmates)
classmates.insert(0, 'aa')	#插入
print(classmates)
classmates.pop(-1)			#删除
print(classmates)
classmates[1] = 'bb'		#赋值
print(classmates)

##
# list里面的元素的数据类型也可以不同
# list元素也可以是另一个list
##

##
#	元组:tuple和list非常类似，但是tuple一旦初始化就不能修改
#	因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple
# 	tuple的陷阱：当你定义一个tuple时，在定义的时候，tuple的元素就必须被确定下来
##
t = (1, 2)
print(t)
tt = (1,)	# 括号()既可以表示tuple，又可以表示数学公式中的小括号,只有1个元素的tuple定义时必须加一个逗号,来消除歧义,不加逗号则是数字1
t = ('a', 'b', ['A', 'B'])
print(t)
t[2][0] = 'X'
t[2][1] = 'Y'
print(t)
##
# tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。
# 即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的！
##