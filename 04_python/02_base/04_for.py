#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## for循环

names = ['aa', 'bb', 'cc']
for name in names:
	print(name)

sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
	sum = sum + x
print(sum)

print(list(range(5)))	# range()函数，可以生成一个整数序列

sum = 0
for x in range(101):
	sum += x
print(sum)

## while循环

sum = 0
n = 99
while n > 0:
	sum += n
	n -= 2
print(sum)

n = 0
while n < 10:
	n += 1
	if n % 2 == 0:
		continue
	print(n)