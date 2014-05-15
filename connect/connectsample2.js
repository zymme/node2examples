/**
 * Incorporating connect bundled middleware into an app directly node file
 */

var connect = require('connect');
var http = require('http');

http.createServer(connect()
		
		.use(connect.favicon())
		
		.use(connect.logger())
		
		.use(function(req, res) {
			res.end('Hello World ya HOSER!\n');
		})
		
).listen(8124);