#!/usr/bin/env python3
# -*- coding: utf-8 -*-

L = [36, 5, -12, 9, 21]
print(sorted(L))			# [-12, 5, 9, 21, 36]
print(sorted(L, key=abs))	# [5, 9, -12, 21, 36]

# 忽略大小写的排序
L = ['bob', 'about', 'Zoo', 'Credit']
print((sorted(L, key=str.lower)))				# ['about', 'bob', 'Credit', 'Zoo']

# 要进行反向排序，不必改动key函数，可以传入第三个参数reverse=True
print((sorted(L, key=str.lower, reverse=True)))	# ['Zoo', 'Credit', 'bob', 'about']
   
def by_name(t):
	return t[0]
L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
print(sorted(L, key=by_name))	# [('Adam', 92), ('Bart', 66), ('Bob', 75), ('Lisa', 88)]

def by_score(t):
	return t[1]
print(sorted(L, key=by_score))	# [('Bart', 66), ('Bob', 75), ('Lisa', 88), ('Adam', 92)]



