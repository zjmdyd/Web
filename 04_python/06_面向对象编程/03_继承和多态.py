#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Animal(object):
	"""docstring for Animal"""
	def __init__(self):
		super(Animal, self).__init__()
	def run(self):
		print('Animal is running...')

class Dog(Animal):
	"""docstring for Dog"""
	def __init__(self):
		super(Dog, self).__init__()
	def run(self):
		print('Dog is running...')

class Cat(Animal):
	"""docstring for Cat"""
	def __init__(self):
		super(Cat, self).__init__()
	def run(self):
		print('Cat is running...')

dog = Dog()
dog.run()

cat = Cat()
cat.run()

# 子类和父类都存在相同的run()方法时，我们说，子类的run()覆盖了父类的run()，
# 在代码运行的时候，总是会调用子类的run()。这样，我们就获得了继承的另一个好处：多态。

def run_twice(animal):
	animal.run()
	animal.run()
run_twice(Dog())
run_twice(Cat())