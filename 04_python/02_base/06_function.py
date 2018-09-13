#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## 函数

# 函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”：
a = abs
print(a(-1))

n1 = 255
print(hex(n1))

def my_abs(x):
	if not isinstance(x, (int, float)):
		raise TypeError('bad operand type')
	if x >= 0:
		return x
	else:
		return -x
print(my_abs(-100))

def point(x, y):
	nx = x * 100
	ny = y * 100
	return nx, ny
x, y = point(1, 2)	# 返回值是一个tuple！但是，在语法上，返回一个tuple可以省略括号
print(x, y)


## 空函数:	如果想定义一个什么事也不做的空函数，用pass语句：pass语句什么都不做，那有什么用？实际上pass可以用来作为占位符
## 			比如现在还没想好怎么写函数的代码，就可以先放一个pass，让代码能运行起来。
def nop():
    pass

## 一个参数
def power(x):
	return x * x
print(power(5))	

## 两个参数
def power(x, n):
	s = 1
	while n > 0:
		n -= 1
		s = s * x
	return s	
print(power(2, 4))
print(power(5, 3))

## 默认参数
def power(x, n=2):
	s = 1 
	while n > 0:
		n -= 1 
		s = s * x;
	return s	
print(power(5))
print(power(5, 4))

def enroll(name, gender):
	print('name', name)
	print('gender', gender)
enroll('smart', 'F')

def enroll(name, gender, age=6, city='BeiJing'):
	print('name', name)
	print('gender', gender)
	print('age', age)
	print('city', city)
enroll('Bob', 'M')
enroll('Bob', 'M', city='Tianjin')
enroll('Bob', 'M', 7)	# 除了name，gender这两个参数外，最后1个参数应用在参数age上

## 采坑之路
def add_end(L=[]):
	L.append('END')
	return L
print(add_end([1, 2, 3]))	# 当你正常调用时，结果似乎不错
print(add_end())			# 当你使用默认参数调用时，一开始结果也是对的
print(add_end())			# 但是，再次调用add_end()时，结果就不对了：默认参数是[]，但是函数似乎每次都“记住了”上次添加了'END'后的list
##
# 原因解释如下：
# Python函数在定义的时候，默认参数L的值就被计算出来了，即[]，因为默认参数L也是一个变量，它指向对象[]，
# 每次调用该函数，如果改变了L的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。
# 定义默认参数要牢记一点：默认参数必须指向不变对象!!!!!!!!
##

# 要修改上面的例子，我们可以用None这个不变对象来实现：
def add_end(L=None):
	if L is None:
		L = []
	L.append('END')
	return L
print(add_end())
print(add_end())

##
# 为什么要设计str、None这样的不变对象呢？因为不变对象一旦创建，对象内部的数据就不能修改，这样就减少了由于修改数据导致的错误。
# 此外，由于对象不变，多任务环境下同时读取对象不需要加锁，同时读一点问题都没有。我们在编写程序时，如果可以设计一个不变对象，那就尽量设计成不变对象
##

## 可变参数
def calc(numbers):
	sum = 0
	for n in numbers:
		sum = sum + n * n 
	return sum 
print(calc([1, 2, 3]))	# 调用的时候，需要先组装出一个list或tuple

def calc(*numbers):		# 在参数前面加了一个*号，定义一个可变参
	sum = 0
	for n in numbers:
		sum = sum + n * n 
	return sum 

t = (1, 3, 5)
# print(calc(t))	# 报错:如果是可变参，则不能直接传入List或tuple
print(calc(*t))		# 在list或tuple前面加一个*号就可以了

## 关键字参数
def person(name, age, **kw):	# 不受限制的关键字参数
	if 'city' in kw:
		print('有city参数')
	if 'job' in kw:
		print('有job参数')
	print('name:', name, 'age', age, 'other:', kw)
person('Jack', 24, city='Beijing', addr='Chaoyang')

# 限制关键字参数的名字，就可以用命名关键字参数
# 和关键字参数**kw不同，命名关键字参数需要一个特殊分隔符*，*后面的参数被视为命名关键字参数
def person(name, age, *, city, job):	
	print(name, age, city, job)
person('Jack', 24, city='Beijing', job='Teacher')



