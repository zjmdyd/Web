#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sqlite3

conn = sqlite3.connect('test.db')

cursor = conn.cursor()

# # 插入
# cursor.execute("insert into user (id, name) values ('3', 'Lisa')")
# # 通过rowcount获得插入的行数:
# print(cursor.rowcount)

# # 按关键字查询:
# cursor.execute('select * from user where id=?', ('1',))
# # 获得查询结果集:
# values = cursor.fetchall()
# print(values)

# 更新
# cursor.execute("update user set name = 'Martin' where id=2")

# 查询表内所有记录
values = cursor.execute('select * from user')
for row in cursor:
	print(row)

# 删除
# cursor.execute("delete from user where id=3")

cursor.close()
# 提交事务: 当执行更新(增删改)操作时需要提交
# conn.commit()
conn.close()
