#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
s = Student()
s.name = 'Lisa'	# 动态给实例绑定一个属性

#
# 动态绑定方法
#
def set_age(self, age):
	self.age = age 
from types import MethodType
s.set_age = MethodType(set_age, s)	# 给实例绑定一个方法
s.set_age(25)
print(s.age)
# 但是，给一个实例绑定的方法，对另一个实例是不起作用的
# 为了给所有实例都绑定方法，可以给class绑定方法

def set_score(self, score):
	self.score = score
Student.set_score = set_score
s.set_score(100)
print(s.score)
# 给class绑定方法后，所有实例均可调用
# 通常情况下，上面的set_score方法可以直接定义在class中，但动态绑定允许我们在程序运行的过程中动态给class加上功能，这在静态语言中很难实现

## __slots__
# Python允许在定义class的时候，定义一个特殊的__slots__变量，来限制该class实例能添加的属性
class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
	__slots__ = ('name', 'age')
s = Student()
s.name = 'Lisa'
s.age = 25
# s.score = 99	'Student' object has no attribute 'score'
# 使用__slots__要注意，__slots__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的
# 除非在子类中也定义__slots__，这样，子类实例允许定义的属性就是自身的__slots__加上父类的__slots__


