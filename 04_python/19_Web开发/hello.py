#!/usr/bin/env python3
# -*- coding: utf-8 -*-

##
# WSGI：Web Server Gateway Interface。
##
# WSGI接口定义非常简单，它只要求Web开发者实现一个函数，就可以响应HTTP请求

def application(environ, start_response):
	print(environ)
	start_response('200 OK', [('Content-Type', 'text/html')])
	body = '<h1>Hello, %s!</h1>' % (environ['PATH_INFO'][1:] or 'web')	# 'PATH_INFO': '/Martin'
	return [body.encode('utf-8')]

# 上面的application()函数就是符合WSGI标准的一个HTTP处理函数，它接收两个参数：

# environ：一个包含所有HTTP请求信息的dict对象；

# start_response：一个发送HTTP响应的函数。

# 在application()函数中，调用：

# start_response('200 OK', [('Content-Type', 'text/html')])


# {'TERM_PROGRAM': 'Apple_Terminal', 'SHELL': '/bin/bash', 'TERM': 'xterm-256color', 'TMPDIR': '/var/folders/tz/m4dmz7yn0rqf9h93l2v6zn5r0000gn/T/', 'Apple_PubSub_Socket_Render': '/private/tmp/com.apple.launchd.txbwKQtnIQ/Render', 'TERM_PROGRAM_VERSION': '404', 'OLDPWD': '/Users/ZJ', 'TERM_SESSION_ID': 'C96DAD53-7617-44B6-B4F7-BC005440B911', 'USER': 'ZJ', 'SSH_AUTH_SOCK': '/private/tmp/com.apple.launchd.2sbnrPWTxO/Listeners', 'PATH': '/Users/ZJ/anaconda3/bin:/usr/local/opt/coreutils/libexec/gnubin:/usr/local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin', 'PWD': '/Users/ZJ/Desktop/Project/Web/04_python/19_Web开发', 'XPC_FLAGS': '0x0', 'XPC_SERVICE_NAME': '0', 'SHLVL': '1', 'HOME': '/Users/ZJ', 'LOGNAME': 'ZJ', 'LC_CTYPE': 'UTF-8', '_': '/Users/ZJ/anaconda3/bin/python', 'SERVER_NAME': 'asssi.local', 'GATEWAY_INTERFACE': 'CGI/1.1', 'SERVER_PORT': '8001', 'REMOTE_HOST': '', 'CONTENT_LENGTH': '', 'SCRIPT_NAME': '', 'SERVER_PROTOCOL': 'HTTP/1.1', 'SERVER_SOFTWARE': 'WSGIServer/0.2', 'REQUEST_METHOD': 'GET', 'PATH_INFO': '/Martin', 'QUERY_STRING': '', 'REMOTE_ADDR': '127.0.0.1', 'CONTENT_TYPE': 'text/plain', 'HTTP_HOST': 'localhost:8001', 'HTTP_CONNECTION': 'keep-alive', 'HTTP_UPGRADE_INSECURE_REQUESTS': '1', 'HTTP_USER_AGENT': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36', 'HTTP_ACCEPT': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'HTTP_ACCEPT_ENCODING': 'gzip, deflate, br', 'HTTP_ACCEPT_LANGUAGE': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7', 'wsgi.input': <_io.BufferedReader name=7>, 'wsgi.errors': <_io.TextIOWrapper name='<stderr>' mode='w' encoding='UTF-8'>, 'wsgi.version': (1, 0), 'wsgi.run_once': False, 'wsgi.url_scheme': 'http', 'wsgi.multithread': True, 'wsgi.multiprocess': False, 'wsgi.file_wrapper': <class 'wsgiref.util.FileWrapper'>}