

var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
	res.send(
		"Hello World	sdfasdf\
		\
		asdfas\
		df\
		fssadfsdfsdfsdfsdfsdfsdfsdfsadfd\
		fsdf\
		"
		
	);
});

app.listen(3000);
