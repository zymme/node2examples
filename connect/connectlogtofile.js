/**
 * Sample connect static web app logging to file using dev mode -  node file
 */
var connect = require('connect');
var http = require('http');
var fs = require('fs');
var __dirname = "../http1/home/examples";

var writeStream = fs.createWriteStream('./log.txt', 
		{ 'flags' : 'a',
		  'encoding' : 'utf8',
		  'mode' : 0666});

//create our httpserver using connect 
http.createServer( connect()

		.use(connect.logger({format : 'dev', stream : writeStream} ))
		.use(connect.static(__dirname + '/public_html')) 
		
).listen(8124);

console.log('Server running on 8124...');