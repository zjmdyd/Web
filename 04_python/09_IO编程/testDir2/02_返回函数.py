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
		def f():	# 未绑定函数参数
			return  i * i
		fs.append(f)
	return fs

L = count()
for x in L:
	print(x)
	print(x())	# 9

# 全部都是9！原因就在于返回的函数引用了变量i，但它并非立刻执行。
# 等到3个函数都返回时，它们所引用的变量i已经变成了3，因此最终结果为9
f1, f2, f3 = count()
print(f1())	# 9
print(f2())	# 9
print(f3()) # 9
# 返回闭包时牢记一点：返回函数不要引用任何循环变量，或者后续会发生变化的变量


# 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，
# 无论该循环变量后续如何更改，已绑定到函数参数的值不变：
def count():
	def f(j):	# 绑定函数参数，以后循环不会再改变
		def g():
			return j*j
		return g
	fs = []
	for i in range(1, 4):
		fs.append(f(i))
	return fs 

f1, f2, f3 = count()
print(f1())	# 1
print(f2())	# 4
print(f3()) # 9


def createCounter():
	def f():
		x = 0
		while True:
			x += 1
			print('yield')
			yield x
	print('haqi')
	sum = f()

	def counter():
		return next(sum)
	return counter

countA = createCounter()
print(countA(), countA(), countA(), countA())



