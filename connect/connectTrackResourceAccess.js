/**
 * Sample to track user resource access node file
 */
var connect = require('connect');
var http = require('http');

//clear all session data function
function clearSession(req, res, next) {
	
	if('/clear' == req.url) {
		console.log('clearing session data...');
		req.session = null;
		res.statusCode = 302;
		res.setHeader('Location', '/NewFile.html');
		res.end();
	}
	else {
		next();
	}
}

//track user
function trackUser(req, res, next) {
	
	req.session.ct = req.session.ct || 0;
	req.session.username = req.session.username || req.cookies.username;
	console.log(req.cookies.username + ' requested ' + req.session.ct++ + ' resources this session');
	next();
	
}

//cookie and session
var app = connect()
			.use(connect.logger('dev'))
			.use(connect.cookieParser('mumble'))
			.use(connect.cookieSession({key : 'tracking'}))
			.use(clearSession)
			.use(trackUser);

//static server
app.use(connect.static('../http1/home/examples/public_html'));

//start sever and listen
http.createServer(app).listen(8124);
console.log('Server listening on port 8124');