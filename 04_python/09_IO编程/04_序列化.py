#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 我们把变量从内存中变成可存储或传输的过程称之为序列化，在Python中叫pickling，在其他语言中也被称之为serialization，marshalling，flattening等等，都是一个意思。

# 序列化之后，就可以把序列化后的内容写入磁盘，或者通过网络传输到别的机器上。

# 反过来，把变量内容从序列化的对象重新读到内存里称之为反序列化，即unpickling。

# Python提供了pickle模块来实现序列化。

import pickle

# 把一个对象序列化并写入文件
d = dict(name='Bob', age=20, score=99)
bdumps = pickle.dumps(d)	# dumps()方法把任意对象序列化成一个bytes
print(bdumps)

# pickle.dumps()方法把任意对象序列化成一个bytes，然后，就可以把这个bytes写入文件。或者用另一个方法pickle.dump()直接把对象序列化后写入一个file-like Object:
f = open('dump.txt', 'wb')
pickle.dump(d, f)			# dump 将数据通过特殊的形式转换为只有python语言认识的字符串，并写入文件
f.close()

# 当我们要把对象从磁盘读到内存时，可以先把内容读到一个bytes，然后用pickle.loads()方法反序列化出对象，
# 也可以直接用pickle.load()方法从一个file-like Object中直接反序列化出对象。我们打开另一个Python命令行来反序列化刚才保存的对象
print(pickle.loads(bdumps))	# loads()方法对应二进制文件的反序列化
print('\n')

f = open('dump.txt', 'rb')	
print(type(f))				# <class '_io.BufferedReader'>
d = pickle.load(f)			# load()方法对应BufferedReader文件的反序列化
f.close()
print(d)	# 这个变量和原来的变量是完全不相干的对象，它们只是内容相同而已。
# Pickle的问题和所有其他编程语言特有的序列化问题一样，就是它只能用于Python，并且可能不同版本的Python彼此都不兼容，
# 因此，只能用Pickle保存那些不重要的数据，不能成功地反序列化也没关系

print('\njson.dumps()')

##
# JSON
##
import json
d1 = dict(name='Lisa', age=20, score='88')
json_str = json.dumps(d1)	# dumps()方法返回一个str，内容就是标准的JSON, 类似的，dump()方法可以直接把JSON写入一个file-like Object
print(json_str)			
print(type(json_str))	# # <class 'str'>
# 要把JSON反序列化为Python对象，用loads()或者对应的load()方法，前者把JSON的字符串反序列化，后者从file-like Object中读取字符串并反序列化:
d2 = json.loads(json_str)
print(d2)

print('\njson.dump()')

##
# dump():用于将dict类型的数据转成str，并写入到json文件中 对应load()
# dumps() 对应loads()
##

f2 = open('json_dump.txt', 'wb')
json_dump = json.dump(d1, f2)	# dump会写入文件	python3下会出错,不知其因
f2.close()

f2 = open('json_dump.txt', 'rb')
print(type(f2))
json_dump = json.load(f2)	# <type 'file'>
print(json_dump)
# 由于JSON标准规定JSON编码是UTF-8，所以我们总是能正确地在Python的str与JSON的字符串之间转换

print('\n对象序列化')

##
# 实例对象序列化
##
class Student(object):
	"""docstring for Student"""
	def __init__(self, name, age, score):
		super(Student, self).__init__()
		self.name = name
		self.age = age
		self.score = score
s = Student('Lisa', 20, 100)

# 可选参数default就是把任意一个对象变成一个可序列为JSON的对象，我们只需要为Student专门写一个转换函数，再把函数传进去即可
def student2dict(std):
	return {
		'name': std.name,
		'age': std.age,
		'score': std.score
	}
# 这样，Student实例首先被student2dict()函数转换成dict，然后再被顺利序列化为JSON

print(json.dumps(s, default=student2dict))

print('\n测试ensure_ascii')
obj = dict(name='小明', age=20)
s = json.dumps(obj, ensure_ascii=True)
print(s)



