#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import mysql.connector

conn = mysql.connector.connect(user='root', password='apple111', database='test_db')
cursor = conn.cursor()

# cursor.execute('drop database if exists test_db')

cursor.execute('create database if not exists test_db default character set utf8')
cursor.execute('drop table if exists user')
cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')
cursor.execute('insert into user (id, name) values (%s, %s)', ['1', 'Martin'])
conn.commit()

cursor.execute('select * from user where id = %s', ('1',))
values = cursor.fetchall()
print(values)

cursor.close()

# 关闭Connection:
conn.close()

# CREATE DATABASE IF NOT EXISTS my_db default character set utf8 COLLATE utf8_general_ci;
# 那么在这个数据库下创建的所有数据表的默认字符集都会是utf8了，
# 注意后面这句话 "COLLATE utf8_general_ci",大致意思是在排序时根据utf8变码格式来排序