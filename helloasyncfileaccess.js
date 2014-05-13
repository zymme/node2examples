/**
 * Hello World - access a file asynchronously - write out contents using node 
 */

var http = require('http');
var fs = require('fs');

//create the http server
http.createServer(function(req, res) {
	
	//open and read the file
	fs.readFile('helloworld.js', 'utf8', function(err, data) {
		
		res.writeHead(200, {'content-type' : 'text/plain'});
		
		if(err) {
			res.write("could not find or open file for reading\n");
		}
		else {
			//if no error, write the JS fiel to client
			console.log("sending contents of file to user");
			res.write(data);
		}
		
		res.end();
		
	});	//readFile
	
}).listen(8124, function() {
	console.log("bound to port 8124");
});

console.log("Server running on 8124/");


