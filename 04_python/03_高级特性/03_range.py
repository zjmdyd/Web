#!/usr/bin/env python3
# -*- coding: utf-8 -*-

print(list(range(10)))

L = []
for x in range(1,10):
	L.append(str(x) + '*' + str(x))
print(L)

# 写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来
L = [x * x for x in range(10)]
print(L)

L = [x * x for x in range(10) if x % 2 == 0]
print(L)

L = [m + n for m in 'ABC' for n in 'XYZ']
print(L)

import os

L = [d for d in os.listdir('.')]	# os.listdir可以列出文件和目录
print(L)

d = {'a' : 'x', 'b' : 'y', 'c' : 'z'}
L = [k + '=' + v for k, v in d.items()]
print(L)

# 把一个list中所有的字符串变成小写
L = ['HELLO', 'IBM', 'APPLE']
print([s.lower() for s in L])



