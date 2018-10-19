#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 在Python中，这种一边循环一边计算的机制，称为生成器：generator。
L = [x * x for x in range(10)]
print(L)

# 要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator
g = (x * x for x in range((10)))
print(g)

# generator保存的是算法，每次调用next(g)，就计算出g的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出StopIteration的错误
# 当然，上面这种不断调用next(g)实在是太变态了，正确的方法是使用for循环，因为generator也是可迭代对象

for n in g:
	print(n)

def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		print(b)
		a, b = b, a + b 
		n += 1
	return 'done'
fib(6)

# b = 1, a = 0
# a, b = 1, 1

# b = 1, a = 1
# a, b = 1, 2

# b = 2, a = 1
# a, b = 2, 3

# b = 3, a = 2
# a, b = 3, 5

# b = 5, a = 3
# a, b = 5, 8

# 这就是定义generator的另一种方法。如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1

g = fib(5)
while True:
	try:
		x = next(g)
		print('g:', x)
	except StopIteration as e:
		print('Generator return value:', e.value)
		break;

fib = fib(6)
for x in fib:
	print(x)	

# 最难理解的就是generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。
# 而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。
# 举个简单的例子，定义一个generator，依次返回数字1，3，5：
def odd():
	print('step 1')
	yield 1
	print('step 2')
	yield 3
	print('step 3')
	yield 5
o = odd()

# 调用该generator时，首先要生成一个generator对象，然后用next()函数不断获得下一个返回值
for x in o:
	print(x)


# 生成器对象是一个迭代器。但是它比迭代器对象多了一些方法，它们包括send方法，throw方法和close方法。这些方法，主要是用于外部与生成器对象的交互。
# send方法有一个参数，该参数指定的是上一次被挂起的yield语句的返回值

def MyGenerator():
	value = (yield 1)
	value = (yield value)

gen = MyGenerator()
print(next(gen))	# python3之前用gen.next()
print(gen.send(2))
# print(gen.send(3))

# 上面代码的运行过程如下。
# 当调用gen.next()方法时，python首先会执行MyGenerator方法的yield 1语句。由于是一个yield语句，因此方法的执行过程被挂起，而next方法返回值为yield关键字后面表达式的值，即为1。

# 当调用gen.send(2)方法时，python首先恢复MyGenerator方法的运行环境。同时，将表达式(yield 1)的返回值定义为send方法参数的值，即为2。这样，接下来value=（yield 1）这一赋值语句会将value的值置为2。继续运行会遇到yield value语句。因此，MyGenerator方法再次被挂起。同时，send方法的返回值为yield关键字后面表达式的值，也即value的值，为2。

# 当调用send(3)方法时MyGenerator方法的运行环境。同时，将表达式(yield value)的返回值定义为send方法参数的值，即为3。这样，接下来value=（yield value）这一赋值语句会将value的值置为3。继续运行，MyGenerator方法执行完毕，故而抛出StopIteration异常。
# 总的来说，send方法和next方法唯一的区别是在执行send方法会首先把上一次挂起的yield语句的返回值通过参数设定，从而实现与生成器方法的交互。但是需要注意，在一个生成器对象没有执行next方法之前，由于没有yield语句被挂起，所以执行send方法会报错
# gen.send(None)  但是这个方法是可以执行的
# 因为当send方法的参数为None时，它与next方法完全等价。但是注意，虽然上面的代码可以接受，但是不规范。所以，在调用send方法之前，还是先调用一次next方法为好。

def myGenerator():  
	try:
		yield 1
		print('Statement after yield')
	except GeneratorExit as e:
		print("Generator error caught")
print ("End of myGenerator")

gen = myGenerator()
print(next(gen))
gen.close()
print("End of main caller")

# 需要注意的是，GeneratorExit异常的产生意味着生成器对象的生命周期已经结束。因此，一旦产生了GeneratorExit异常，生成器方法后续执行的语句中，不能再有yield语句，否则会产生RuntimeError


# def myGenerator():  
#     value = 1  
#     while True:  
#         try:  
#             yield value  
#             value += 1  
#         except Exception:  
#             value = 1  
  
  
# gen = myGenerator()  
# print gen.next()  
# print gen.next()  
# print gen.throw(Exception, "Method throw called!") 
# 代码第7行的except语句声明只捕获Exception异常对象。这样，当系统产生GeneratorExit异常后，不再被except语句捕获，继续向外抛出，从而跳出了生成器对象方法的while语句。


# 这里再简单说一句，GeneratorExit异常继承自BaseException类。BaseException类与Exception类不同。一般情况下，BaseException类是所有内建异常类的基类，而Exception类是所有用户定义的异常类的基类。


