<?php
	header('Content-type:application/json;text/json;charset=utf-8');
	$user = $_POST['user'];
	$password = $_POST['password'];
	if ($user == 'hehe' && $password == '111111') {
		echo '{"result" : true}';
	}else {
		echo '{"result" : false}';
	}
?>