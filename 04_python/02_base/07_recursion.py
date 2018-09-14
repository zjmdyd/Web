#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def fact(n):
	# print(n)
	if n == 1:
		return 1
	return n * fact(n - 1)
print(fact(100))


def fact2(n):
	return fact_iter(n, 1)

def fact_iter(num, product):
	# print(num)
	if num == 1:
		return product
	return fact_iter(num - 1, num * product)
print(fact_iter(100, 1))


Hanoi(3, a, b, c)

Hanoi(2, a, c, b)	Hanoi(1, a, b, c)  Hanoi(a, b) Hanoi(c, a, b)
Hanoi(a, c)
Hanoi(2, b, a, c)