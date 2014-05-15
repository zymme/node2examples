/**
 * New node file
 */

var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');
var crossroads = require('crossroads');
var connect = require('connect');

var base = "../http1/home/examples/public_html";

var proxy = httpProxy.createProxy();

//create a proxy server to listen on port 9000
var proxyServer = http.createServer(function(req, res) {
	
	console.log(req.url);
	
	if(req.url.match(/^\/node\//)) {
//	if(req.url === '/node') {
		
		console.log('matched node in url path...');
		proxy.web(req, res, { target: 'http://localhost:8000' });
	
	}
	else {
		console.log('node not in url path...')
		proxy.web(req, res, { target: 'http://localhost:8124'});
	}
		
	
}).listen(9000);


//add route for request for dynamic resource
crossroads.addRoute('/node/{id}/', function(id) {
	
	console.log('accessed node ' + id);
	
});


//dynamic file server
http.createServer(function(req, res) {
	
//	res.end('hi from 8000');
	
	crossroads.parse(req.url);
	res.end('that\'s all!');
	
}).listen(8000);


//static file server
http.createServer(connect()
					.use(connect.favicon())
					.use(connect.logger('dev'))
					.use(connect.static(base))
					
).listen(8124);