/**
 * New node file - demo helloworld
 */

//load http module
var http = require('http');

http.createServer(function(req, res) {
	
	//set content header
	res.writeHead(200, {'content-type' : 'text/plain'});
	
	//write message - signal communication is complete
	res.end("Hello, World!\n");
	
}).listen(8124);

console.log("Server running on 8124");

