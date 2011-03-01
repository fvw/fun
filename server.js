
var http = require('http');

http.createServer(function( request, response ){

	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('Hello World\n');

}).listen(8000, '192.168.7.50');

console.log('Server running at http://192.168.7.50:8000');


