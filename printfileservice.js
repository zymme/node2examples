/**
 * New node file that waits for a timeout prints numbers out, and contents of file
 */

var http = require('http');
var fs = require('fs');
var theurl = require('url');
var qs = require('querystring');



//function to write out numbers
function writeOutNumbers(res) {
	
	var counter = 0;
	
	for(var i = 0; i < 100; i++) {
		
		counter++;
		res.write(counter.toString() + '\n');
		
	}	//for
	
}	//end function

//create the http server
http.createServer(function(req, res) {
	
	var query = theurl.parse(req.url).query;
//	console.log("querystring = " + query);
	
	var app = qs.parse(query).file + ".txt";
//	console.log("app is " + app);
	
	//set content header
	res.writeHead(200, {'content-type' : 'text/plain'});
	
	//write out numbers
	writeOutNumbers(res);
	
	setTimeout(function() {
		
		console.log("opening " + app);
		//open and read in file contents
		fs.readFile(app, 'utf8', function(err, data) {
			
			if(err) {
				res.write('Could not find or open file for reading\n');
			} 
			else {				
				console.log("file data = " + data);
				res.write(data.toString());
				
				res.end();
			}
			
			
		});	//readFile
		
	}, 2000);	//setTimeOut
	
	
	
	
}).listen(8124);

console.log("Server running at 8124...")