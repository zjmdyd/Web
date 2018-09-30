#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

def fn(p, name):
	dirs = os.listdir(p)
	for x in dirs:
		deeper_dir = os.path.join(p, x)
		if os.path.isdir(deeper_dir):
			print('deeper_dir =', deeper_dir)
			fn(deeper_dir, name)
		else:
			if x.find(name) > -1:
				print('文件包含指定字符串%s-->%s-->%s:' % (name, x, os.path.abspath(deeper_dir)))
			else:
				print('未包含指定字符串:%s-->%s' % (name, deeper_dir))
fn('.', '.py')