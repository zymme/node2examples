/**
 * Accessing request cookie info sample node file
 */
var connect = require('connect');
var http = require('http');

var app = connect()
			.use(connect.logger('dev'))
			
			.use(connect.cookieParser())
			
			.use(function(req, res, next) {
				console.log('tracking ' + req.cookies.username);
				console.log('sessionid ' + req.cookies.JSESSIONID);
				next();
			})
			
			.use(connect.static('../http1/home/examples/public_html')
					);

http.createServer(app).listen(8124);
console.log('Server listening on port 8124');

