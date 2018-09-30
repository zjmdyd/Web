#!/usr/bin/env python3
# -*- coding: utf-8 -*-

print(int('100', 16))

# 自动以二进制转换函数
def int2(x, base=2):
	return int(x, base)
print(int2('110'))

import functools

##
# functools.partial的作用就是: 把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单
##
int2 = functools.partial(int, base=2)	
print(int2('10010'))
# 也可以在函数调用时传入其他值
print(int2('10010', base=4))

# 创建偏函数时，实际上可以接收函数对象、*args和**kw这3个参数
# int2 = functools.partial(int, base=2)	实际上固定了int()函数的关键字参数base

# int2('10010')
# 相当于:
# kw = { 'base': 2 }
# int('10010', **kw)

max2 = functools.partial(max, 10)	# 实际上会把10作为*args的一部分自动加到左边
print(max2(5, 6, 7))
# 相当于
# args = (10, 5, 6, 7)
# max(*args)

args = (1, 3, 5)
print(max2(*args))


