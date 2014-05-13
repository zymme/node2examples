/**
 * New node file to call http endpoint multiple times
 */

var http = require('http');

//the url we want, plus the path and options we need for http request

var options = {
	
		host: 'localhost',
		port: 8124,
		path: '/?file=secondary',
		method: 'GET'
};


var processPublicTimeline = function(response) {
	console.log("finished request");
};


for (var i = 0; i < 2000; i++) {
	http.request(options, processPublicTimeline).end();
}