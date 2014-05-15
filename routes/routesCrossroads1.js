/**
 * using crossroads to route URL requests to specific actions -  node file
 */
var crossroads = require('crossroads');
var http = require('http');

crossroads.addRoute('/category/{type}/:pub:/:id:', function(type, pub, id) {
	
	if(!id && !pub) {
		console.log('Accessing all of entries of category ' + type);
	}
	else if (!id) {
		console.log('Accessing all entreis of category ' + type + ' and pub ' + pub);
	}
	else {
		console.log('Acessing item ' + id + ' of ' + pub + ' of category ' + type);
	}
	
});

http.createServer(function(req, res) {
	crossroads.parse(req.url);
	res.end('and that\'s all \n');
	
}).listen(8124);

