#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#求回数
# 回数是指从左向右读和从右向左读都是一样的数，例如12321，909
def fn(num):
	L0 = []
	while True:
		if num / 10 > 0:
			r = num % 10
			num = num // 10			
			L0.append(r) # 4
		else:
			break
	L1 = L0[:] 
	L0.reverse()
	for i, x in enumerate(L0):
		if L0[i] != L1[i]:
			return False
		return True			
ft = filter(fn, [12321, 1234, 909])
print(list(ft))

## 进阶算法
def fn2(num):
	return num == int(str(num)[::-1])
ft = filter(fn2, [12321, 1234, 909])
print(list(ft))	

