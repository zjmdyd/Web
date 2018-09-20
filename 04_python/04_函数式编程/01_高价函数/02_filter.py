#!/usr/bin/env python3
# -*- coding: utf-8 -*-

###
# 和map()类似，filter()也接收一个函数和一个序列。
# 和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素

def is_odd(n):
	return n % 2 == 1	# 满足条件的保留, 不满足的筛选掉
print(list(filter(is_odd, [1, 2, 3, 4, 5, 6, 7])))

def not_empty(s):
	return s and s.strip()
l = list(filter(not_empty, ['A', '', None, 'C', '   ', 'D']))
print(l)

# 计算素数的一个方法:埃氏筛法
def odd_iter():
	n = 1
	while True:
		n += 2
		yield n

def prime_filter(n):
 	return lambda x: x % n > 0	# 取余, 能被整除的筛掉不要

def primes():
	yield 2
	it = odd_iter()		# 初始序列

	while True:
		n = next(it) 	# 返回序列的第一个元素
		yield n 
		it = filter(prime_filter(n), it)	# 构造新序列
		
for n in primes():
	if n < 100:
		print(n)
	else:
		break;