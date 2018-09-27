#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Animal(object):
	"""docstring for Animal"""
	def __init__(self):
		super(Animal, self).__init__()

## 大类
#  哺乳类
class Mammal(Animal):
	"""docstring for Mammal"""
	def __init__(self):
		super(Mammal, self).__init__()	
#  鸟类
class Bird(Animal):
	"""docstring for Bird"""
	def __init__(self):
		super(Bird, self).__init__()	

# 各种动物
class Dog(Mammal):
	"""docstring for Dog"""
	def __init__(self):
		super(Dog, self).__init__()

class Bat(Mammal):
	"""docstring for Bat"""
	def __init__(self):
		super(Bat, self).__init__()

class Parrot(Bird):
	"""docstring for Parrot"""
	def __init__(self):
		super(Parrot, self).__init__()

class Ostrich(Bird):
	"""docstring for Ostrich"""
	def __init__(self):
		super(Ostrich, self).__init__()

## 功能类
class Runnable(object):
	"""docstring for Runnable"""
	def __init__(self):
		super(Runnable, self).__init__()

class Flyable(object):
	"""docstring for Flyable"""
	def __init__(self):
		super(Flyable, self).__init__()

## 多继承
class Dog(Mammal, Runnable):
	"""docstring for Dog"""
	def __init__(self):
		super(Dog, self).__init__()
		
class Bat(Mammal, Flyable):
	"""docstring for Bat"""
	def __init__(self):
		super(Bat, self).__init__()


# MixIn
# 在设计类的继承关系时，通常，主线都是单一继承下来的，例如，Ostrich继承自Bird。但是，如果需要“混入”额外的功能，通过多重继承就可以实现，比如，让Ostrich除了继承自Bird外，再同时继承Runnable。这种设计通常称之为MixIn。

# 为了更好地看出继承关系，我们把Runnable和Flyable改为RunnableMixIn和FlyableMixIn。类似的，你还可以定义出肉食动物CarnivorousMixIn和植食动物HerbivoresMixIn，让某个动物同时拥有好几个MixIn

class RunnableMixIn(object):
	"""docstring for RunnableMixIn"""
	def __init__(self):
		super(RunnableMixIn, self).__init__()

class Dog(Mammal, RunnableMixIn):
	"""docstring for Dog"""
	def __init__(self):
		super(Dog, self).__init__()
		
		
		
		