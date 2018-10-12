#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sqlite3

conn = sqlite3.connect('test.db')
cur = conn.cursor()
cur.execute("select name from sqlite_master where type='table' order by name")
values = cur.fetchall()
for x in values:
	print(x)
	conn.execute('drop table %s' % x)	# 删除表