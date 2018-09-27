#!/usr/bin/env python3
# -*- coding: utf-8 -*-
class Hello(object):
	"""docstring for Hello"""
	def __init__(self):
		super(Hello, self).__init__()
	def hello(self, name='world'):
		print('Hello, %s.' % name)
