#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；
# 第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。

print('a =', 10//3)		#地板除

#编码
print(ord('A'))		# ord()函数获取字符的整数表示
print(ord('中'))
print(chr(66))		# chr()函数把编码转换为对应的字符
print(chr(25991))
print('\u4e2d\u6587')

#encode
print('ABC'.encode('ascii'))	
print('中文'.encode('utf-8'))

#decode
print(b'ABC'.decode('ascii'))	# Python对bytes类型的数据用带b前缀的单引号或双引号表示
print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))
print(b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore'))
print()

#字符串长度
print(len('ABC')) 	# 3 计算str包含多少个字符
print(len('中文')) 	# 2

print(len(b'ABC'))	# 3
print(len(b'\xe4\xb8\xad\xe6\x96\x87'))	# 6
print(len('中文'.encode('utf-8')))		# 1个中文字符经过UTF-8编码后通常会占用3个字节，而1个英文字符只占用1个字节

# 格式化输出(与C语言类似)
name='martin'
money=100000000000
print('Hi, %s, you have $%ld' % (name, money))
print('growth rate:%d%%' % 7)	 # 字符串里面的%是一个普通字符怎, 这个时候就需要转义，用%%来表示一个%


