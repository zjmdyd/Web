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
@log
def now2():
	print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
now2()

# 把@log放到now()函数的定义处，相当于执行了语句
