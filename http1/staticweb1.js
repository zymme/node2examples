/**
 * Sample static file web server 
 */

var http = require('http');
var path = require('path');
var fs = require('fs');
var base = "./home/examples/public_html";

http.createServer(function(req, res) {
	
	pathname = base + req.url;
	console.log(pathname);
	
	fs.exists(pathname, function(exists) {
		
		if(!exists) {
			
			console.log(pathname + 'path does not exist!');
			res.writeHead(404);
			res.write("Bad request 404\n");
			res.end();
		
		}
		else {
		
			console.log(pathname + 'path does exist!!');
			res.setHeader('content-type', 'text/html');
			
			//200 status - found, no errors
			res.statusCode = 200;
			
			//create and pipe readable stream
			var file = fs.createReadStream(pathname);
			
			file.on('open', function() {
				
				file.pipe(res);
				
			});
			
			file.on('error', function(err) {
				
				console.log(err); 	
				
			});
		}
		
	});
	
	
	
}).listen(8124);

console.log('http server listening on 8124...');