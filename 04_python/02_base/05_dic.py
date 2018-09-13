#!/usr/bin/env python3
# -*- coding: utf-8 -*-

## dict
d = {'aa' : 100, 'bb' : 99, 'cc' : 98}
print(d['aa'])
print('ccc' in d)	# 避免key不存在的错误，有两种办法，一是通过in判断key是否存在
print(d.get('ccc'))	# 二是通过dict提供的get()方法，如果key不存在，可以返回None，或者自己指定的value
print(d.get('ccc', -1))
d.pop('aa')			# 要删除一个key，用pop(key)方法，对应的value也会从dict中删除
print(d)
##
# 要保证hash的正确性，作为key的对象就不能变。在Python中，
# 字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key
##

## set
# set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
# set是无序的
##
s = set([1, 2, 3, 4, 5, 4, 3])
print(s)
s.add(5)	# 可以重复添加，但不会有效果
print(s)
s.add(6)
print(s)
s.remove(1)
print(s)

# set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操
s1 = set([1, 2, 3, 4])
s2 = set([4, 5, 6, 7])
print(s1 & s2)
print(s1 | s2)

# set的原理和dict一样，所以，同样不可以放入可变对象，
# 因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”

a = ['c', 'b', 'a']
a.sort()
print(a)


## 可变与不可变对象
a = 'abc'
print(a)
b = a.replace('a', 'A')
print(b)
print(a)
# 
# 对于不变对象来说，调用对象自身的任意方法，也不会改变该对象自身的内容。
# 相反，这些方法会创建新的对象并返回，这样，就保证了不可变对象本身永远是不可变的


