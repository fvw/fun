/*
 *
 *
 
 sudo npm install underscore
 sudo npm install request
 sudo npm install socket.io
 sudo npm install express
 sudo npm install connect
 sudo npm install hiredis redis

 *
 */


var http = require('http');
var redis = require("redis"),
	    client = redis.createClient();

client.on("error", function (err) {
	console.log("Error " + err);
});

http.createServer(function( request, response ){

	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	client.hgetall("users:1000", function(error, reply){
		var myresponse = {};
		myresponse.reply = reply;
		myresponse.name = 'Barry White';

		response.end(JSON.stringify(myresponse));
	});
	//response.end('Hello World\n');

}).listen(8000, '192.168.7.50');

console.log('Server running at http://192.168.7.50:8000');


