#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 
import os
print('Process (%s) start...' % os.getpid())	
# Only works on Unix/Linux/Mac:

pid = os.fork()
if pid == 0:	# 子进程
	print('I am a child process (%s) and my parent is %s' % (os.getpid(), os.getppid()))
else:
	print('I (%s) just created a child process (%s).' % (os.getpid(), pid))

# 要让Python程序实现多进程（multiprocessing），我们先了解操作系统的相关知识。

# Unix/Linux操作系统提供了一个fork()系统调用，它非常特殊。普通的函数调用，调用一次，返回一次，
# 但是fork()调用一次，返回两次，因为操作系统自动把当前进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回。

# 子进程永远返回0，而父进程返回子进程的ID。这样做的理由是，一个父进程可以fork出很多子进程，
# 所以，父进程要记下每个子进程的ID，而子进程只需要调用getppid()就可以拿到父进程的ID
# 

print('\nmultiprocessing')
##
# multiprocessing: 就是跨平台版本的多进程模块
##

# multiprocessing模块提供了一个Process类来代表一个进程对象
# 

from multiprocessing import Process
import os
def run_proc(name):
 	print('Run child process %s (%s)...' % (name, os.getpid()))
if __name__ == '__main__':
 	print('Parent process %s.' % os.getpid())
 	p = Process(target=run_proc, args=('test',))
 	print('Child process will start.')
 	p.start()
 	p.join()
 	print('Child process end.')
# 创建子进程时，只需要传入一个执行函数和函数的参数，创建一个Process实例，用start()方法启动，这样创建进程比fork()还要简单。

# join()方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步
# 

print('\nPool')

##
#Pool: 如果要启动大量的子进程，可以用进程池的方式批量创建子进程：
##
from multiprocessing import Pool
import os, time, random
def long_time_task(name):
	print('Run task %s (%s)...' % (name, os.getpid()))
	start = time.time()
	# time.sleep(t) t-->推迟执行的秒数
	time.sleep(random.random() * 3)	# random()返回随机生成的一个实数，它在[0,1)范围内
	end = time.time()
	print('Task %s runs %.2f second.' % (name, (end - start)))
# random.randint(1,10)  产生 1 到 10 的一个整数型随机数

if __name__ == '__main__':
	print('Parent process %s.' % os.getpid())
	p = Pool(4)
	for i in range(5):
		p.apply_async(long_time_task, args=(i,))
	print('Waitting for all subprocesses done...')
	p.close()
	p.join()
	print('All subprocesses done.')
# 对Pool对象调用join()方法会等待所有子进程执行完毕，调用join()之前必须先调用close()，调用close()之后就不能继续添加新的Process了
# 请注意输出的结果，task 0，1，2，3是立刻执行的，而task 4要等待前面某个task完成后才执行，这是因为Pool的默认大小在我的电脑上是4，因此，最多同时执行4个进程。
# 这是Pool有意设计的限制，并不是操作系统的限制, Pool的默认大小是CPU的核数
# 
# Parent process 1743.
# Parent process 1744.
# Waitting for all subprocesses done...
# Waitting for all subprocesses done...
# Run task 0 (1747)...
# Run task 0 (1748)...
# Run task 1 (1749)...
# Run task 1 (1750)...
# Run task 2 (1751)...
# Run task 2 (1752)...
# Run task 3 (1754)...
# Run task 3 (1753)...
# Task 1 runs 0.22 second.
# Run task 4 (1750)...
# Task 4 runs 0.17 second.
# Task 0 runs 0.58 second.
# Task 3 runs 1.27 second.
# Run task 4 (1753)...
# Task 2 runs 1.45 second.
# Task 0 runs 2.30 second.
# Task 3 runs 2.37 second.
# Task 2 runs 2.57 second.
# Task 1 runs 2.57 second.
# All subprocesses done.
# Task 4 runs 2.52 second.
# All subprocesses done.
# 
print('\n查看系统核心数')
from multiprocessing import cpu_count
print('cpu_count =', cpu_count())