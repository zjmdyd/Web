#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):
	"""docstring for Student"""
	def __init__(self, name):
		super(Student, self).__init__()
		self.name = name
	def __str__(self):
		return 'Student object (name: %s)' % self.name
print(Student('Lisa'))

s = Student('Ali')
print(s)

# 直接显示变量调用的不是__str__()，而是__repr__()，两者的区别是__str__()返回用户看到的字符串，而__repr__()返回程序开发者看到的字符串，也就是说，__repr__()是为调试服务的。

# 解决办法是再定义一个__repr__()。但是通常__str__()和__repr__()代码都是一样的，所以，有个偷懒的写法：

class Student(object):
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return 'Student object (name=%s)' % self.name
    __repr__ = __str__

## __iter__

class Fib(object):
	"""docstring for Fib"""
	def __init__(self):
		super(Fib, self).__init__()
		self.a, self.b = 0, 1

	def __iter__(self):
		return self		# 实例本身就是迭代对象，故返回自己

	def __next__(self):
		self.a, self.b = self.b, self.a + self.b
		if self.a > 10000:	# 退出循环的条件
			raise StopIteration()
		return self.a 		# 返回下一个值
for x in Fib():
	print(x)

print('\n')

# __getitem__
# Fib实例虽然能作用于for循环，看起来和list有点像，但是，把它当成list来使用还是不行，比如，取第n个元素会报错:'Fib' object does not support indexing
# 要表现得像list那样按照下标取出元素，需要实现__getitem__()方法：
class Fib(object):
	"""docstring for Fib"""
	def __init__(self):
		super(Fib, self).__init__()

	def __getitem__(self, n):
		if isinstance(n, int):		# n是索引 返回索引所在的值
			a, b = 1, 1
			for x in range(n):
				a, b = b, a + b
			return a
		if isinstance(n, slice):	# n是切片 返回列表
			start = n.start
			stop = n.stop
			step = n.step
			if start is None:
				start = 0
			a, b = 1, 1
			L = []
			if step is None:
				for x in range(start, stop):
					L.append(a)
					a, b = b, a + b 
			else:
				for x in range(start, stop, step):
					L.append(self[x])
			return L
f = Fib()		
print(f[0])
print(f[1])
print(f[2])
print(f[3])
print(f[5])
print(f[0:5])	# [1, 1, 2, 3, 5]
print(f[0:10])	# [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
print(f[0:10:2])	# [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# __getattr__
class Student(object):
	"""docstring for Student"""
	def __init__(self):
		super(Student, self).__init__()
		self.name = 'Lisa'
	# 当调用不存在的属性时，比如score，Python解释器会试图调用__getattr__(self, 'score')来尝试获得属性，这样，我们就有机会返回score的值
	def __getattr__(self, attr):
		if attr == 'score':
			return 99
		return AttributeError('Student object has no attribute %s' % attr)
s = Student()
print(s.score)
print(s.age)
# 注意，只有在没有找到属性的情况下，才调用__getattr__，已有的属性，比如name，不会在__getattr__中查找
# 注意到任意调用如s.abc都会返回None，这是因为我们定义的__getattr__默认返回就是None。要让class只响应特定的几个属性，我们就要按照约定，抛出AttributeError的错误


# __call__
# 一个对象实例可以有自己的属性和方法，当我们调用实例方法时，我们用instance.method()来调用
# 任何类，只需要定义一个__call__()方法，就可以直接对实例进行调用
class Student(object):
	"""docstring for Student"""
	def __init__(self, *name):
		super(Student, self).__init__()
		self.name = name
	def __call__(self):
		print('My name is %s.' % self.name)
s = Student('Lisa2')
s()

# __call__()还可以定义参数。对实例进行直接调用就好比对一个函数进行调用一样，所以你完全可以把对象看成函数，把函数看成对象，因为这两者之间本来就没啥根本的区别
# 如果你把对象看成函数，那么函数本身其实也可以在运行期动态创建出来，因为类的实例都是运行期创建出来的，这么一来，我们就模糊了对象和函数的界限。
# 那么，怎么判断一个变量是对象还是函数呢？其实，更多的时候，我们需要判断一个对象是否能被调用，能被调用的对象就是一个Callable对象，比如函数和我们上面定义的带有__call__()的类实例
print(callable(Student()))
print(callable(max))	# True
print(callable(None))	# False
print(callable('str'))	# False

	


