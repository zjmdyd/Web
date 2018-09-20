#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import operator

## 切片
print('****')
print('list')
print('****')
L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
print(L[0:3])	# 从索引0开始取，直到索引3为止，但不包括索引3			['Michael', 'Sarah', 'Tracy']
print(L[1:3])	# ['Sarah', 'Tracy']
print(L[:3]) 	# 如果第一个索引是0，还可以省略
print(L[1:])	# 从第一个到最后		['Sarah', 'Tracy', 'Bob', 'Jack']
print(L[:-1])	# 从第一个到最后		['Michael', 'Sarah', 'Tracy', 'Bob']
print(L[::-1])	# 从最后一个开始取，每次取一个		['Jack', 'Bob', 'Tracy', 'Sarah', 'Michael']

print(L[-1:])	# 取最后一个元素
print(L[-2:])
print(L[-2:-1])

L = list(range(100))
print(L)
print(L[-10:])

print(L[:10:2])		# 前10个数，每两个取一个
print(L[::5])		# 所有数，每5个取一个

print('****')
print('tuple')
print('****')
T = tuple(range(100))
print(T)
print(T[:3])

print('****')
print('string')
print('****')

string = 'ABCDEFG'
print(string[:3])	# ABC
print(string[::2])	# ACEG
print(string[::-1])	# GFEDCBA

print('****')
print('清除空格')
print('****')

## 清除首尾空格

def clearBlank(s):
	changeString = ''
	for i,str in enumerate(s):
		if operator.ne(str, ' '):	# python3 字符串比较
			changeString += str 
	return changeString

print(clearBlank(' a A B C'))

## 清除首尾空格
def trim(s):
	changeString = ''
	headIndex = 0
	for i,str in enumerate(s):
		match = ''
		for x in range(i+1):
			match += ' ';
		if operator.ne(s[:i+1], match):	
			headIndex = i

			break

	changeString = '' if headIndex == 0 else s[headIndex:]
	for i,str in enumerate(s):
		match = ''
		for x in range(i+1):
			match += ' ';

		if operator.ne(s[-(i+1):], match):	
			headIndex = i
			break
	changeString = changeString[:len(changeString) - headIndex]
	return changeString
print(trim(' a '))
print(len(trim(' a ')))


def trim(s):
    if s[:1] != ' ' and s[-1:] != ' ':	
        return s
    elif s[:1] == ' ':					
        return trim(s[1:])
    else:
        return trim(s[:-1])				

print(trim(' abc '))
print(len(trim(' abc ')))
