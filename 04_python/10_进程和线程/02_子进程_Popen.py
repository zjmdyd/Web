#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
import subprocess

# class subprocess.Popen(args, bufsize=-1, executable=None, stdin=None, stdout=None, stderr=None, 
#     preexec_fn=None, close_fds=True, shell=False, cwd=None, env=None, universal_newlines=False,
#     startup_info=None, creationflags=0, restore_signals=True, start_new_session=False, pass_fds=())
# 参数说明：

# args： 要执行的shell命令，可以是字符串，也可以是命令各个参数组成的序列。当该参数的值是一个字符串时，该命令的解释过程是与平台相关的，因此通常建议将args参数作为一个序列传递。
# bufsize： 指定缓存策略，0表示不缓冲，1表示行缓冲，其他大于1的数字表示缓冲区大小，负数 表示使用系统默认缓冲策略。
# stdin, stdout, stderr： 分别表示程序标准输入、输出、错误句柄。
# preexec_fn： 用于指定一个将在子进程运行之前被调用的可执行对象，只在Unix平台下有效。
# close_fds： 如果该参数的值为True，则除了0,1和2之外的所有文件描述符都将会在子进程执行之前被关闭。
# shell： 该参数用于标识是否使用shell作为要执行的程序，如果shell值为True，则建议将args参数作为一个字符串传递而不要作为一个序列传递。
# cwd： 如果该参数值不是None，则该函数将会在执行这个子进程之前改变当前工作目录。
# env： 用于指定子进程的环境变量，如果env=None，那么子进程的环境变量将从父进程中继承。如果env!=None，它的值必须是一个映射对象。
# universal_newlines： 如果该参数值为True，则该文件对象的stdin，stdout和stderr将会作为文本流被打开，否则他们将会被作为二进制流被打开。
# startupinfo和creationflags： 这两个参数只在Windows下有效，它们将被传递给底层的CreateProcess()函数，用于设置子进程的一些属性，如主窗口的外观，进程优先级等。

# 子进程的PID存储在child.pid

# 可以在Popen()建立子进程的时候改变标准输入、标准输出和标准错误，并可以利用subprocess.PIPE将多个子进程的输入和输出连接在一起，构成管道(pipe)
child = subprocess.Popen(['ls', '-l'], stdout=subprocess.PIPE)
read = child.stdout.read()
print(read)
print('\n')
print(read.decode('utf-8'))
print('\n')

child1 = subprocess.Popen(["cat", "/etc/passwd"], stdout=subprocess.PIPE)
child2 = subprocess.Popen(["grep","0:0"], stdin=child1.stdout, stdout=subprocess.PIPE)
out = child2.communicate()
print(out)

# subprocess.PIPE实际上为文本流提供一个缓存区。child1的stdout将文本输出到缓存区，随后child2的stdin从该PIPE中将文本读取走。
# child2的输出文本也被存放在PIPE中，直到communicate()方法从PIPE中读取出PIPE中的文本。
# 注意：communicate()是Popen对象的一个方法，该方法会阻塞父进程，直到子进程完成
