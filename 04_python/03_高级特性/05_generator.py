#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 在Python中，这种一边循环一边计算的机制，称为生成器：generator。
L = [x * x for x in range(10)]
print(L)

# 要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator
g = (x * x for x in range((10)))
print(g)

# generator保存的是算法，每次调用next(g)，就计算出g的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出StopIteration的错误
# 当然，上面这种不断调用next(g)实在是太变态了，正确的方法是使用for循环，因为generator也是可迭代对象

for n in g:
	print(n)

def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		print(b)
		a, b = b, a + b 
		n += 1
	return 'done'
fib(6)

# b = 1, a = 0
# a, b = 1, 1

# b = 1, a = 1
# a, b = 1, 2

# b = 2, a = 1
# a, b = 2, 3

# b = 3, a = 2
# a, b = 3, 5

# b = 5, a = 3
# a, b = 5, 8

# 这就是定义generator的另一种方法。如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1

g = fib(5)
while True:
	try:
		x = next(g)
		print('g:', x)
	except StopIteration as e:
		print('Generator return value:', e.value)
		break;

fib = fib(6)
for x in fib:
	print(x)	

# 最难理解的就是generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。
# 而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。
# 举个简单的例子，定义一个generator，依次返回数字1，3，5：
def odd():
	print('step 1')
	yield 1
	print('step 2')
	yield 3
	print('step 3')
	yield 5
o = odd()

# 调用该generator时，首先要生成一个generator对象，然后用next()函数不断获得下一个返回值
for x in o:
	print(x)





