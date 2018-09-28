#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 用print()打印最大的坏处是将来还得删掉它，想想程序里到处都是print()，运行结果也会包含很多垃圾信息

##
# 断言
##
def foo(s):
	n = int(s)
	assert n != 0, 'n is zero'
	return 10 / n
def main():
	foo('0')
main()
# ssert的意思是，表达式n != 0应该是True，否则，根据程序运行的逻辑，后面的代码肯定会出错。

# 如果断言失败，assert语句本身就会抛出AssertionError

# Traceback (most recent call last):
#   File "02_错误处理.py", line 15, in <module>
#     main()
#   File "02_错误处理.py", line 14, in main
#     foo('0')
#   File "02_错误处理.py", line 11, in foo
#     assert n != 0, 'n is zero'
# AssertionError: n is zero

#***	关闭断言的输出结果	***#

# Traceback (most recent call last):
#   File "02_错误处理.py", line 15, in <module>
#     main()
#   File "02_错误处理.py", line 14, in main
#     foo('0')
#   File "02_错误处理.py", line 12, in foo
#     return 10 / n
# ZeroDivisionError: division by zero