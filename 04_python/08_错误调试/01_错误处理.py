#!/usr/bin/env python3
# -*- coding: utf-8 -*-

##
# try
##
try:
	print('try...')
	r = 10 / 0
	print('result:', r)	# 当出错时后面代码不会执行
except ZeroDivisionError as e:
	print('except:', e)
else:
	pass
finally:
	print('finally...')
print('END')

print('\n')

#***** 输出 *****#
# try...
# except: division by zero
# finally...
# END
#***** 输出结束 *****#

# 当我们认为某些代码可能会出错时，就可以用try来运行这段代码，如果执行出错，则后续代码不会继续执行，而是直接跳转至错误处理代码，即except语句块，
# 执行完except后，如果有finally语句块，则执行finally语句块，至此，执行完毕
# 当错误发生时，后续语句print('result:', r)不会被执行，except由于捕获到ZeroDivisionError，因此被执行
# 当没有错误发生，所以except语句块不会被执行，但是finally如果有，则一定会被执行（可以没有finally语句)

def fn(x):
	try:
		print('try...')
		r = 10 / int(x)
		print('result:', r)
	except ValueError as e:
		print('ValueError:', e)
	except ZeroDivisionError as e:
		print('ZeroDivisionError:', e)
	else:	# 如果没有错误发生，可以在except语句块后面加一个else，当没有错误发生时，会自动执行else语句
		print('no error!')
	finally:
		print('finally')
	print('End')
	print('\n')
fn(1)
fn('a')

# Python的错误其实也是class，所有的错误类型都继承自BaseException，所以在使用except时需要注意的是，它不但捕获该类型的错误，还把其子类也“一网打尽”
def foo():
	r = some_function()
	if r == (-1):
		return (-1)
	return r
def bar():
	r = foo()
	if r == (-1):
		print('Error')
	else:
		pass
# 第二个except永远也捕获不到UnicodeError，因为UnicodeError是ValueError的子类，如果有，也被第一个except给捕获了
try:
	foo
except ValueError as e:
	print('ValueError')
except UnicodeError as e:
	print('UnicodeError')

# 使用try...except捕获错误还有一个巨大的好处，就是可以跨越多层调用，比如函数main()调用foo()，foo()调用bar()，结果bar()出错了，这时，只要main()捕获到了，就可以处理
def foo(s):
	return 10 / int(s)
def bar(s):
	return foo(s) * 2
def main():
	try:
		bar('0')
	except Exception as e:
		print('Error:', e)
	finally:
		print('finally')
# 也就是说，不需要在每个可能出错的地方去捕获错误，只要在合适的层次去捕获错误就可以了。这样一来，就大大减少了写try...except...finally的麻烦		
main()

print('\n')

## 记录错误
import logging
def main():
	try:
		bar('0')
	except Exception as e:
		logging.exception(e)	# 程序打印完错误信息后会继续执行，并正常退出
main()
print('END')
# 通过配置，logging还可以把错误记录到日志文件里，方便事后排查

print('\n')

##
# 抛出错误
##
# 因为错误是class，捕获一个错误就是捕获到该class的一个实例。因此，错误并不是凭空产生的，而是有意创建并抛出的。Python的内置函数会抛出很多类型的错误，我们自己编写的函数也可以抛出错误。

# 如果要抛出错误，首先根据需要，可以定义一个错误的class，选择好继承关系
class FooError(ValueError):
	pass
def foo(s):
	n = int(s)
	if  n == 0:
		raise FooError('invalid value: %s' % s)
	return 10 / n
try:
	foo('0')
except Exception as e:
	print(e)
	pass


# 只有在必要的时候才定义我们自己的错误类型。如果可以选择Python已有的内置的错误类型（比如ValueError，TypeError），尽量使用Python内置的错误类型

def foo(s):
	n = int(s)
	if n == 0:
		raise ValueError('invalid value %s' % s)
	return 10 / n

def bar():
	try:
		foo('0')
	except ValueError as e:
		print('ValueError')
		raise
bar()

# 在bar()函数中，我们明明已经捕获了错误，但是，打印一个ValueError!后，又把错误通过raise语句抛出去了，这不有病么？

# 其实这种错误处理方式不但没病，而且相当常见。捕获错误目的只是记录一下，便于后续追踪。但是，由于当前函数不知道应该怎么处理该错误，
# 所以，最恰当的方式是继续往上抛，让顶层调用者去处理。好比一个员工处理不了一个问题时，就把问题抛给他的老板，如果他的老板也处理不了，就一直往上抛，最终会抛给CEO去处理。
try:
	10 / 0
except ZeroDivisionError as e:
	raise ValueError('input error!')

# 只要是合理的转换逻辑就可以，但是，决不应该把一个IOError转换成毫不相干的ValueError

# raise语句如果不带参数，就会把当前错误原样抛出。此外，在except中raise一个Error，还可以把一种类型的错误转化成另一种类型

		

