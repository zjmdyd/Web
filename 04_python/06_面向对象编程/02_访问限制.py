#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):
	"""docstring for Student"""
	def __init__(self, name, score):
		super(Student, self).__init__()		# 特殊方法“__init__”前后分别有两个下划线！！！
		self.name = name
		self.score = score
	def print_score(self):
		print('%s: %s' % (self.name, self.score))
	def get_grade(self):
		if self.score >= 90:
			return 'A'
		elif self.score >= 60:
			return 'B'
		else:
			return 'C'

bart = Student('Simpson', 55)
bart.print_score()
bart.score = 99		# 外部代码还是可以自由地修改一个实例的name、score属性
bart.print_score()

# 如果要让内部属性不被外部访问，可以把属性的名称前加上两个下划线__，
# 在Python中，实例的变量名如果以__开头，就变成了一个私有变量（private），只有内部可以访问，外部不能访问


class Student(object):
	"""docstring for Student"""
	def __init__(self, name, score):
		super(Student, self).__init__()
		self.__name = name
		self.__score = score
	def print_score(self):
		print('%s: %s' % (self.__name, self.__score))
	def get_name(self):
		return self.__name
	def get_score(self):
		return self.__score
	def set_score(self, score):
		if score >= 0 and score <= 100:
			self.__score = score
		else:
			raise ValueError('bad score')
			
# 改完后，对于外部代码来说，没什么变动，但是已经无法从外部访问实例变量.__name和实例变量.__score了
# 这样就确保了外部代码不能随意修改对象内部的状态，这样通过访问限制的保护，代码更加健壮
lisa = Student('Lisa', 99)
# print(lisa.__score)	# 'Student' object has no attribute '__score'
lisa.print_score()
print(lisa.get_score())
# 需要注意的是，在Python中，变量名类似__xxx__的，也就是以双下划线开头，并且以双下划线结尾的，
# 是特殊变量，特殊变量是可以直接访问的，不是private变量，所以，不能用__name__、__score__这样的变量名

# 有些时候，你会看到以一个下划线开头的实例变量名，比如_name，这样的实例变量外部是可以访问的，

# 但是，按照约定俗成的规定，当你看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问”。

# 双下划线开头的实例变量是不是一定不能从外部访问呢？其实也不是。
# 不能直接访问__name是因为Python解释器对外把__name变量改成了_Student__name，所以，仍然可以通过_Student__name来访问__name变量
# 但是强烈建议你不要这么干，因为不同版本的Python解释器可能会把__name改成不同的变量名。

# 总的来说就是，Python本身没有任何机制阻止你干坏事，一切全靠自觉
print(lisa._Student__name) # Lisa
lisa.__name = 'Lisa2'	# 设置__name变量！
print(lisa.__name)		# Lisa2
# 表面上看，外部代码“成功”地设置了__name变量，但实际上这个__name变量和class内部的__name变量不是一个变量！
# 内部的__name变量已经被Python解释器自动改成了_Student__name，而外部代码给bart新增了一个__name变量
print(lisa.get_name())	# Lisa



















