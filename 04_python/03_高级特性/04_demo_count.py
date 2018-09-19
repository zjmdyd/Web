#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 32.8     =  32.8 -  6   =  26.8+1.2 =  28.0
# 32.8+106 = 138.8 - 25.6 = 113.2+1.2 = 114.4
# 154.1	 = 154.1 - 28.3 = 125.7+1.2 = 126.9
# 		 = 325.7 - 60.0 = 265.7+3.6 = 269.3

def countPrice(prices, discount, transport):
	sum0 = sum(prices)

	values = []
	for x in prices:
		price = x * (1 - discount/sum0) + x*transport/sum0
		values.append(price)
	sum1 = sum(values)

	print('sum0 = %.1f, sum1 = %.1f' % (sum0, sum1))

	return	values

prices = [32.8, 138.8, 154.1]; discount = 60; transport = 3.5
print(countPrice(prices, discount, transport))





