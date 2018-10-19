#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import mysql.connector

conn = mysql.connector.connect(user='root', password='apple111', database='test')
cursor = conn.cursor()
cursor.execute('select version()')
data = cursor.fetchone()
print('database version: %s' % data)

# 获取所有的数据库
cursor.execute('show databases;')
values = cursor.fetchall()
print(values)

cursor.execute('drop table if exists user')
cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')
cursor.execute('insert into user (id, name) values (%s, %s)', ['1', 'Lisa'])
conn.commit()

cursor.execute('select * from user where id = %s', ('1',))
values = cursor.fetchall()
print(values)

cursor.close()

# 关闭Connection:
conn.close()


# MySQL的SQL占位符是%s。

# 情况一：如果是本机的mysql过期。

# 请使用root用户命令行登录（命令行登录不存在过期）。

# 登陆后直接输入 > set password = password('123456');

# 再次使用客户端访问，发现可用。

# 创建数据库
# cursor.execute('create database if not exists test')

# drop database if exists db_name;
# drop table if exists table_name;