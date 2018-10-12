#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Python处理URL的函数就是C：Controller，Controller负责业务逻辑，比如检查用户名是否存在，取出用户信息等等；

# 包含变量{{ name }}的模板就是V：View，View负责显示逻辑，通过简单地替换一些变量，View最终输出的就是用户看到的HTML。

# MVC中的Model在哪？Model是用来传给View的，这样View在替换变量的时候，就可以从Model中取出相应的数据。

# Python支持关键字参数，很多Web框架允许传入关键字参数，然后，在框架内部组装出一个dict作为Model。

from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
	return render_template('home.html')

@app.route('/signin', methods=['GET'])
def signin_form():
	return render_template('form.html')

@app.route('/signin', methods=['POST'])
def signin():
	username = request.form['username']
	password = request.form['password']
	if username=='admin' and password=='password':
		return render_template('signin-ok.html', username=username)
	return render_template('form.html', message='Bad username or password', username=username)

if __name__ == '__main__':
	app.run()
# Flask通过render_template()函数来实现模板的渲染。和Web框架类似，Python的模板也有很多种。Flask默认支持的模板是jinja2

# <!-- 通过MVC，我们在Python代码中处理M：Model和C：Controller，而V：View是通过模板处理的，这样，我们就成功地把Python代码和HTML代码最大限度地分离了。

# 使用模板的另一大好处是，模板改起来很方便，而且，改完保存后，刷新浏览器就能看到最新的效果，这对于调试HTML、CSS和JavaScript的前端工程师来说实在是太重要了。

# 在Jinja2模板中，我们用{{ name }}表示一个需要替换的变量。很多时候，还需要循环、条件判断等指令语句，在Jinja2中，用{% ... %}表示指令。

# 比如循环输出页码：

# {% for i in page_list %}
#     <a href="/page/{{ i }}">{{ i }}</a>
# {% endfor %} -->

# http://localhost:5000/
# http://localhost:5000/signin

##
# 使用mysql
##
# mysql密码:apple111
# .bash_profile在/Users/ZJ(当前用户名)目录下，没有的话可以用touch命令创建一个
# /usr/local/mysql/bin
