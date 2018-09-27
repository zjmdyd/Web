#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 首先，我们来判断对象类型，使用type()函数：

# 基本类型都可以用type()判断, 它返回对应的Class类型

print(type(123))	# <class 'int'>		
print(type('str'))	# <class 'str'>
print(type(None))	# <class 'NoneType'>

# 如果一个变量指向函数或者类，也可以用type()判断
print(type(abs))	# <class 'builtin_function_or_method'>

print(type(123) == int) 	# True
print(type('abc') == str) 	# True
print(type(123) == 'abc') 	# False

import types

def fn():
	pass
print(type(fn) == types.FunctionType) 			# True
print(type(abs) == types.BuiltinFunctionType) 	# True
print(type(lambda x: x) == types.LambdaType)	 # True
print(type((x for x in range(10))) == types.GeneratorType) # True

print('\n')

# 能用type()判断的基本类型也可以用isinstance()判断：
print(isinstance('a', str)) 	# True
print(isinstance(b'a', bytes)) 	# True

# 并且还可以判断一个变量是否是某些类型中的一种，比如下面的代码就可以判断是否是list或者tuple：
print(isinstance([1, 2, 3], (list, tuple)))
# 总是优先使用isinstance()判断类型，可以将指定类型及其子类“一网打尽”。

print('\n')

##
# 使用dir()
# 如果要获得一个对象的所有属性和方法，可以使用dir()函数，它返回一个包含字符串的list
print(dir('ABC'))
# ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
# 类似__xxx__的属性和方法在Python中都是有特殊用途的，比如__len__方法返回长度。在Python中，如果你调用len()函数试图获取一个对象的长度，实际上，在len()函数内部，它自动去调用该对象的__len__()方法
print(len('ABC') == 'ABC'.__len__())	# 这两个方法是等价的

print('\n')

class MyObject(object):
	"""docstring for MyObject"""
	def __init__(self):
		super(MyObject, self).__init__()
		self.x = 9
	def power(self):
		return self.x * self.x
obj = MyObject()
# 测试该对象的属性
print(hasattr(obj, 'x'))
print(hasattr(obj, 'y'))
setattr(obj, 'y', 19)
print(hasattr(obj, 'y'))
print(getattr(obj, 'y'))
# print(getattr(obj, 'z'))	# AttributeError: 'MyObject' object has no attribute 'z'
# 可以传入一个default参数，如果属性不存在，就返回默认值：
print(getattr(obj, 'z', 404))

# 获得对象的方法：
print(hasattr(obj, 'power'))
print(getattr(obj, 'power'))
fn = getattr(obj, 'power')
print(fn())

# 一个正确的用法的例子如下
def readImage(fp):
	if hasattr(fp, 'read'):
		return readData(fp)
	return None