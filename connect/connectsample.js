/**
 * Connect sample application node file
 */

var connect = require('connect');
var http = require('http');

var app = connect() 
	.use(connect.favicon())
	.use(connect.logger())
	.use(function(req, res) {
		res.end('Hello-World\n');
	});

http.createServer(app).listen(8124);

console.log('Server listening on 8124');


