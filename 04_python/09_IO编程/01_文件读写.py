#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## 打开文件
f = open('./test.py', 'r')
# 如果文件不存在，open()函数就会抛出一个IOError的错误

# 如果文件打开成功，接下来，调用read()方法可以一次读取文件的全部内容，Python把内容读到内存

## 读取文件
print(f.read())

# 最后一步是调用close()方法关闭文件。文件使用完毕后必须关闭，因为文件对象会占用操作系统的资源，并且操作系统同一时间能打开的文件数量也是有限的

## 关闭文件
f.close()

# 由于文件读写时都有可能产生IOError，一旦出错，后面的f.close()就不会调用。所以，为了保证无论是否出错都能正确地关闭文件，我们可以使用try ... finally来实现
try:
	f2 = open('./tt')
except Exception as e:
	raise e
finally:
	if f2 in dir():
		print('f2 =', f2)
		f2.close()

# 但是每次都这么写实在太繁琐，所以，Python引入了with语句来自动帮我们调用close()方法
with open('./test.py', 'r') as f:
	print(f.read())
