#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time

def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
f = now
f()

# 函数对象有一个__name__属性，可以拿到函数的名字
print(now.__name__)
print(f.__name__)


# 现在，假设我们要增强now()函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改now()函数的定义，
# 这种在代码运行期间动态增加功能的方式，称之为“装饰器”（Decorator）

# 本质上，decorator就是一个返回函数的高阶函数
def log(func):
	def wrapper(*args, **kw):
		print('call %s():' % func.__name__)
		return func(*args, **kw)
	return wrapper

# 我们要借助Python的@语法，把decorator置于函数的定义处
@log # 把@log放到now()函数的定义处, 相当于执行了:	now = log(now)
def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now()
print('经装饰1后的now函数名字:', now.__name__)

def log(text):
	def decorator(func):
		def wrapper(*args, **kw):
			print('%s %s():' % (text, func.__name__))
			return func(*args, **kw)
		return wrapper
	return decorator

@log('execute')		# 和两层嵌套的decorator相比，3层嵌套的效果是这样的:	now = log('execute')(now)
def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now()
print('经装饰2后的now函数名字:', now.__name__)

# 以上两种decorator的定义都没有问题，但还差最后一步。
# 因为我们讲了函数也是对象，它有__name__等属性，但你去看经过decorator装饰之后的函数，它们的__name__已经从原来的'now'变成了'wrapper'：
# 所以，需要把原始函数的__name__等属性复制到wrapper()函数中.	Python内置的functools.wraps

import functools
def log(func):
	@functools.wraps(func)
	def wrapper(*args, **kw):
		print('call %s():' % func.__name__)
		return func(*args, **kw)
	return wrapper

# 或者针对带参数的decorator：
def log(text):
	def decorator(func):
		@functools.wraps(func)
		def wrapper(*args, **kw):
			print('%s %s():' % (text, func.__name__))
			return func(*args, **kw)
		return wrapper
	return decorator

@log('execute')		# 和两层嵌套的decorator相比，3层嵌套的效果是这样的:	now = log('execute')(now)
def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now()
print('经装饰3后的now函数名字:', now.__name__)


##
#
##
def log(*text):
	def decorator(func):
		@functools.wraps(func)
		def wrapper(*args, **kw):
			if len(text):
				print('%s %s():' % (text[0], func.__name__))
			else:
				print('%s %s():' % ('call', func.__name__))
			return func(*args, **kw)
		return wrapper
	return decorator

@log('execute')	
def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now()
print('经装饰4后的now函数名字:', now.__name__)

@log()
def now():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now()
print('经装饰5后的now函数名字:', now.__name__)
