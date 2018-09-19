#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## 杨辉三角
L = []
def triangles(n):
	for x in range(n):
		l = []
		for y in range(x+1):
			if x == 0 or x == 1:
				l.append(1)
			elif y == 0 or y == x: 
				l.append(1)
			else:
				tl = L[x-1]
				l.append(tl[y-1] + tl[y])
		yield l
		L.append(l)
t = triangles(10)		
for x in t:
	print(x)

## 进阶版
def triangles(): 
    N = [1]
    while True:		#  0		  1				2
        yield N 	# [1] 		[1, 1]		  [1, 2, 1]
        N.append(0)	# [1, 0]	[1, 1, 0]	 [1, 2, 1, 0]
        N = [N[i-1] + N[i] for i in range(len(N))]	# N = N[-1] + N[0] = 1 , N[0] + N[1] = 1 --> [1, 1]
        											# N = N[-1] + N[0] = 1 , N[0] + N[1] = 2, N[1] + N[2] = 1 --> [1, 2, 1]
n = 0
for t in triangles():
    print(t)
    n += 1
    if n == 10:         #打印10行杨辉三角
        break

# [1] 0
# [1, 1] 0
# [1, 2, 1] 0
# [1, 3, 3, 1]
# [1, 4, 6, 4, 1]
# [1, 5, 10, 10, 5, 1]
# [1, 6, 15, 20, 15, 6, 1]
# [1, 7, 21, 35, 35, 21, 7, 1]
# [1, 8, 28, 56, 70, 56, 28, 8, 1]
# [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]