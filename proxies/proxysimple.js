/**
 * simple proxy web server node file
 */

var http = require('http');
var httpProxy = require('http-proxy');

var proxyServer = httpProxy.createProxyServer({
	
	target: 'http://127.0.0.1:8124', //where do we want to proxy to
	ws : true, //proxy web sockets as well
	xfwd : true
	
}).listen(9000);



http.createServer(function(req, res) {
	
//	console.log('in create server function...');
	
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
	res.end();
	
}).listen(8124);

