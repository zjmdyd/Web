#!/usr/bin/env python3
# -*- coding: utf-8 -*-

##
# 检查参数
##
class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
	def get_score(self):
		if hasattr(self, '_score'):
			return self._score
		else:
			raise ValueError('no property')
	def set_score(self, value):		
		if not isinstance(value, int):
			raise ValueError('score must be an integer')
		if value < 0 or value > 100:
			raise ValueError('score must between 0 ~ 100!')
		self._score = value
s = Student()
s.set_score(88)
print(s.get_score())

## 

class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
	@property
	def score(self):
		return self._score

	@score.setter
	def score(self, value):
		if not isinstance(value, int):
			raise ValueError('score must be an integer')
		if value < 0 or value > 100:
			raise ValueError('score must between 0 ~ 100!')
		self._score = value
# 把一个getter方法变成属性，只需要加上@property就可以了，
# 此时，@property本身又创建了另一个装饰器@score.setter，负责把一个setter方法变成属性赋值
# 此时，@property本身又创建了另一个装饰器@score.setter，负责把一个setter方法变成属性赋值，于是，我们就拥有一个可控的属性操作
# 尽量不要让函数名与变量名同名，便可以避免这些错误。所以，比如说，这里的变量名self.score改为：self._score就可以避免递归错误。
s = Student()
s.score = 60
print(s.score)

# 还可以定义只读属性，只定义getter方法，不定义setter方法就是一个只读属性
class Person(object):
	"""docstring for Person"""
	def __init__(self):
		super(Person, self).__init__()
	@property
	def birth(self):
		return self._birth
	@birth.setter
	def birth(self, value):
		self._birth = value

	def age(self):
		return 2018 - self._birth
# 上面的birth是可读写属性，而age就是一个只读属性


