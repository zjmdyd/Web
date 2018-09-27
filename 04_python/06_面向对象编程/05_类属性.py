#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
	name = 'Student'	# 定义类属性
print(Student.name)
s = Student()
print(s.name)	# 打印name属性，因为实例并没有name属性，所以会继续查找class的name属性
s.name = 'Lisa'	# 给实例绑定name属性
print(s.name)	# 由于实例属性优先级比类属性高，因此，它会屏蔽掉类的name属性
del s.name		# 删除实例的name属性
print(s.name)	# 再次调用s.name，由于实例的name属性没有找到，类的name属性就显示出来了

# 从上面的例子可以看出，在编写程序的时候，千万不要对实例属性和类属性使用相同的名字，
# 因为相同名称的实例属性将屏蔽掉类属性，但是当你删除实例属性后，再使用相同的名称，访问到的将是类属性


		