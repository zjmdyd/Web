#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 数据库表是一个二维表，包含多行多列。把一个表的内容用Python的数据结构表示出来的话，可以用一个list表示多行，list的每一个元素是tuple，表示一行记录，比如，包含id和name的user表：

# [
#     ('1', 'Michael'),
#     ('2', 'Bob'),
#     ('3', 'Adam')
# ]
# Python的DB-API返回的数据结构就是像上面这样表示的。

# 但是用tuple表示一行很难看出表的结构。如果把一个tuple用class实例来表示，就可以更容易地看出表的结构来：

# class User(object):
#     def __init__(self, id, name):
#         self.id = id
#         self.name = name

# [
#     User('1', 'Michael'),
#     User('2', 'Bob'),
#     User('3', 'Adam')
# ]
# 这就是传说中的ORM技术：Object-Relational Mapping，把关系数据库的表结构映射到对象上

# 导入:
from sqlalchemy import Column, String, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# 定义User对象:
class User(Base):
	# 表的名字:
	__tablename__ = 'user'

	# 表的结构:
	id = Column(String(20), primary_key=True)
	name = Column(String(20))

# 初始化数据库连接:
engine = create_engine('mysql+mysqlconnector://root:apple111@localhost:3306/test_db')

# 创建DBSession类型:
DBSession = sessionmaker(bind=engine)

# create_engine()用来初始化数据库连接。SQLAlchemy用一个字符串表示连接信息：

# '数据库类型+数据库驱动名称://用户名:口令@机器地址:端口号/数据库名'
# 你只需要根据需要替换掉用户名、口令等信息即可。

# 创建session对象:
session = DBSession()

# 创建新User对象:
new_user = User(id='4', name='Luosi')

# 添加到session:
session.add(new_user)

# 提交即保存到数据库:
session.commit()

# 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
user = session.query(User).filter(User.id=='4').one()
print('type:', type(user))
print('name::', user.name)

# 关闭session:
session.close()

# ORM框架的作用就是把数据库表的一行记录与一个对象互相做自动转换。

# 正确使用ORM的前提是了解关系数据库的原理。
