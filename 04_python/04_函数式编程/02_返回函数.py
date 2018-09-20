#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def calc_sum(args):
	ax = 0
	for n in args:
		ax += n
	return ax
print(calc_sum([1, 3, 5, 7]))

def lazy_sum(args):
	def sum():
		ax = 0
		for n in args:
			ax += n
		return ax
	return sum
f1 = lazy_sum([1, 3, 5, 7])
print(f1())

# 请再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数
# f1()和f2()的调用结果互不影响
f2 = lazy_sum([1, 3, 5, 7])
print(f1 == f2)

def count():
	fs = []
	for i in range(1, 4):
		def f():
			return  i * i
		fs.append(f)
	return fs
f1, f2, f3 = count()
# 全部都是9！原因就在于返回的函数引用了变量i，但它并非立刻执行。
# 等到3个函数都返回时，它们所引用的变量i已经变成了3，因此最终结果为9
print(f1())
print(f2())
print(f3())




