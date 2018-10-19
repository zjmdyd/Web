#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 求质数
def func(n):
	zhishu = [2,]
	for number in range(2, n + 1):
		for temp in range(2, number):
			if number % temp == 0:
				break
			elif temp == number -1:
				zhishu.append(number)

	return zhishu			
print(func(100))	