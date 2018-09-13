#!/usr/bin/env python3
# -*- coding: utf-8 -*-

age = 20
print('you age is', age)
if age >= 18:
	print('adult')
elif age >= 6:				# elif是else if的缩写
	print('teenager')
else:
	print('kid')

s = input('birth: ')
birth = int(s)
if birth < 2000:
	print('00前')
else:
	print('00后')
