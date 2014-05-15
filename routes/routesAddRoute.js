/**
 * Mapping a route handler to given route -  node file
 */
var crossroads = require('crossroads');
var http = require('http');

var typeRoute = crossroads.addRoute('/{type}/{id}');

function onTypeAccess(type, id) {
	console.log('access ' + type + ' ' + id);
}

typeRoute.matched.add(onTypeAccess);

http.createServer(function(req, res) {
	
	crossroads.parse(req.url);
	res.end('processing');
	
}).listen(8124);
console.log('Server listening on port 8124');
