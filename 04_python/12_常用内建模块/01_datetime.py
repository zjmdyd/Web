#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# datetime是Python处理日期和时间的标准库。

from datetime import datetime

## 
# 获取当前日期和时间
##

now = datetime.now()
print(now)			# 2018-10-09 17:34:17.195987
print(type(now))	# <class 'datetime.datetime'>

# 注意到datetime是模块，datetime模块还包含一个datetime类，通过from datetime import datetime导入的才是datetime这个类。
# 如果仅导入import datetime，则必须引用全名datetime.datetime。

# datetime.now()返回当前日期和时间，其类型是datetime

## 
# 获取指定日期和时间
##

dt = datetime(2018, 10, 9, 17, 40)
print(dt)

##
# datetime转换为timestamp
##

# 在计算机中，时间实际上是用数字表示的。我们把1970年1月1日 00:00:00 UTC+00:00时区的时刻称为epoch time，记为0（1970年以前的时间timestamp为负数），当前时间就是相对于epoch time的秒数，称为timestamp。
# 可见timestamp的值与时区毫无关系，因为timestamp一旦确定，其UTC时间就确定了，转换到任意时区的时间也是完全确定的，
# 这就是为什么计算机存储的当前时间是以timestamp表示的，因为全球各地的计算机在任意时刻的timestamp都是完全相同的（假定时间已校准）

# 把一个datetime类型转换为timestamp只需要简单调用timestamp()方法
dtsp = dt.timestamp()
print(dtsp)	# 1539078000.0
# 注意Python的timestamp是一个浮点数。如果有小数位，小数位表示毫秒数。

## 
# timestamp转换为datetime
##

t = 1539078000.0 
dt = datetime.fromtimestamp(t)
print(dt)		# 2018-10-09 17:40:00	本地时间
utcdt = datetime.utcfromtimestamp(t)
print(utcdt)	# 2018-10-09 09:40:00	UTC时间

## 
# str转换为datetime
##

dstr = '2018-9-1 18:18:18'
cday = datetime.strptime(dstr, '%Y-%m-%d %H:%M:%S')
print(cday)

##
# datetime转换为str
#

# 如果已经有了datetime对象，要把它格式化为字符串显示给用户，就需要转换为str，转换方法是通过strftime()实现的，同样需要一个日期和时间的格式化字符串：

print(now.strftime('%a, %b %d %H:%M'))	# Tue, Oct 09 18:02

# %a	Weekday as locale’s abbreviated name.
# %A	Weekday as locale’s full name.

# %d	Day of the month as a zero-padded decimal number.	01, 02, …, 31

# %b	Month as locale’s abbreviated name.
# %B	Month as locale’s full name.

# %m	Month as a zero-padded decimal number.		01, 02, …, 12
# %y	Year without century as a zero-padded decimal number.	00, 01, …, 99
# %H	Hour (24-hour clock) as a zero-padded decimal number.	00, 01, …, 23
# %I	Hour (12-hour clock) as a zero-padded decimal number.	01, 02, …, 12
# %M	Minute as a zero-padded decimal number.	00, 01, …, 59
# %S	Second as a zero-padded decimal number.	00, 01, …, 59


##
# datetime加减
##

# 对日期和时间进行加减实际上就是把datetime往后或往前计算，得到新的datetime。加减可以直接用+和-运算符，不过需要导入timedelta这个类：
from datetime import timedelta
add = now + timedelta(hours=2)
print(now)
print(add)

##
# 本地时间转换为UTC时间
##
# 本地时间是指系统设定时区的时间，例如北京时间是UTC+8:00时区的时间，而UTC时间指UTC+0:00时区的时间
# 一个datetime类型有一个时区属性tzinfo，但是默认为None，所以无法区分这个datetime到底是哪个时区，除非强行给datetime设置一个时区：
from datetime import timezone
tz_utc_8 = timezone(timedelta(hours=8))	# 创建时区UTC+8:00
dt = now.replace(tzinfo=tz_utc_8)
print(dt)
dt = datetime(2015, 5, 18, 17, 2, 10, 871012, tzinfo=timezone(timedelta(0, 28800)))	# ?(0, 28800)
print(dt)

## 
# 时区转换
##
utc_now = datetime.utcnow()
print(utc_now)
# 拿到UTC时间，并强制设置时区为UTC+0:00:
utc_dt = utc_now.replace(tzinfo=timezone.utc)
print(utc_dt)

# astimezone()将转换时区为北京时间:
bj_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
print(bj_dt)

# astimezone()将bj_dt转换时区为东京时间:
tokyo_dt = bj_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt)

# 时区转换的关键在于，拿到一个datetime时，要获知其正确的时区，然后强制设置时区，作为基准时间。

# 利用带时区的datetime，通过astimezone()方法，可以转换到任意时区。

# 注：不是必须从UTC+0:00时区转换到其他时区，任何带时区的datetime都可以正确转换，例如上述bj_dt到tokyo_dt的转换。

# 小结
# datetime表示的时间需要时区信息才能确定一个特定的时间，否则只能视为本地时间。

# 如果要存储datetime，最佳方法是将其转换为timestamp再存储，因为timestamp的值与时区完全无关。


