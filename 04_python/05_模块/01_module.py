#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' a test module '
__author__ = 'Zeng'

import sys

def test():
	args = sys.argv
	print('args =', args)
	if len(args) == 1:
		print('Hello, world!')
	elif len(args) == 2:
		print('Hello, %s!' % args[1])
	else:
		print('Too many arguments!')
if __name__ == '__main__':
	test()

# sys模块有一个argv变量，用list存储了命令行的所有参数。
# argv至少有一个元素，因为第一个参数永远是该.py文件的名称
# 运行python3 hello.py获得的sys.argv就是['01_module.py']

# private函数和变量“不应该”被直接引用，而不是“不能”被直接引用
# 是因为Python并没有一种方法可以完全限制访问private函数或变量，但是，从编程习惯上不应该引用private函数或变量。
def _private_1(name):
	return 'Hello, %s' % name

def _private_2(name):
	return 'Hello， %s' % name

def greeting(name):
	if len(name) > 3:
		return _private_1(name)
	else:
		return _private_2(name)

# 我们在模块里公开greeting()函数，而把内部逻辑用private函数隐藏起来了，这样，调用greeting()函数不用关心内部的private函数细节，
# 这也是一种非常有用的代码封装和抽象的方法，即：外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public