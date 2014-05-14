/**
 * read, modify and write file asynchronously demo node file
 */

var fs = require('fs');
var async = require('async');

try {
	
	async.waterfall([
	                 
	                 function readData(callback) {
	                	 
	                	 fs.readFile('./data/data1.txt', 'utf8', function(err, data) {
	                		
	                		 callback(err, data);
	                		 
	                	 });
	                 },
	                 function modify(text, callback) {
	                	 
	                	 var adjdata = text.replace(/humingbird\.net/g, 'zedsawesomesite.org');
	                	 
	                	 callback(null, adjdata);
	                	 
	                 },
	                 function writeData(text, callback) {
	                	
	                	 fs.writeFile('./data/data1.txt', text, function(err) {
	                		 callback(err, text);
	                	 });
	                 
	                 }
	                 
	                 ], function (err, result) {
				
						if(err) {
							throw err;
						}
						
						console.log(result);
		
					});
	
}
catch(err) {
	console.log(err.stack);
}
