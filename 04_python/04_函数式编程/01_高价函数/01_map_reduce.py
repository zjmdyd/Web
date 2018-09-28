#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## 高阶函数
def add(x, y, f):
	return f(x) + f(y)
print(add(1, 2, abs))	

## map/reduce

# map()函数接收两个参数，一个是函数，一个是Iterable
# map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回

def f(x):
	return x * x
r = map(f, [1, 2, 3, 4, 5])
print(r)	# map
print(list(r))

# 把list所有数字转为字符串
s = map(str, [1, 2, 3, 4, 5])
print(list(s))

# reduce把一个函数作用在一个序列[x1, x2, x3, ...]上，这个函数必须接收两个参数，
# reduce把结果继续和序列的下一个元素做累积计算

from functools import reduce

def add(x, y):
	return x + y
t = reduce(add, [1, 3, 5, 7])
print(t) # 16

def fn(x, y):
	return x * 10 + y
w = reduce(fn, [1, 3, 5, 7, 9])
print(w)

DIGITS = {'0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9}
def str2Int(s):
	def fn(x, y):
		print('x = %d, y = %d' % (x, y))
		return x * 10 + y
	def char2Num(s):
		print('s =', s)
		return DIGITS[s]
	return reduce(fn, map(char2Num, s)) # 字符串是Iterable的
num0 = str2Int('123')
num1 = str2Int('1')
print('num0 =', num0)
print('num1 =', num1)

print('string转int:"123" =>', int('123', 10))

# '123.45' --> 123.45
def str2Float(s):
	def fn(x, y):
		return x * 10 + y
	def char2Num(s):
		return DIGITS[s]
	point = s.find('.', 0)
	s0 = s[:point]
	s1 = s[point + 1:]
	v0 = reduce(fn, map(char2Num, s0))
	v1 = reduce(fn, map(char2Num, s1))
	return v0 + v1/pow(10, len(s1))
print('num3 = ', str2Float('123.45'))

## 算法2 待续
  
def str2float(s):
  return reduce(lambda x,y:x+int2dec(y),map(str2int,s.split('.')))
def char2num(s):
  return {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}[s]
def str2int(s):
  return reduce(lambda x,y:x*10+y,map(char2num,s))
def intLen(i):
  return len('%d'%i)
def int2dec(i):
  return i/(10**intLen(i))

print(str2float('123.456'))


# 首字母大写
names = ['adam', 'LISA', 'barT']
def normalize(name):
	return name.capitalize()
print(list(map(normalize, names)))

def fn2(x, y):
	return x * y
def prod(L):
	return reduce(fn2, L)

print(prod([3, 5, 7, 9]))

