#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## 高阶函数
def add(x, y, f):
	return f(x) + f(y)
print(add(1, 2, abs))	

## map/reduce

def f(x):
	return x * x
r = map(f, [1, 2, 3, 4, 5])
print(r)	# map
print(list(r))

# 把list所有数字转为字符串
s = map(str, [1, 2, 3, 4, 5])
print(list(s))

from functools import reduce

def add(x, y):
	return x + y
t = reduce(add, [1, 3, 5, 7])
print(t)

def fn(x, y):
	return x * 10 + y
w = reduce(fn, [1, 3, 5, 7, 9])
print(w)

DIGITS = {'0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9}
def str2Int(s):
	def fn(x, y):
		return x * 10 + y
	def char2Num(s):
		return DIGITS[s]
	return reduce(fn, map(char2Num, s))
num = str2Int('123')
print('num =', num)