/**
 * static web file server demo with connect middleware node file
 */

var connect = require('connect');
var http = require('http');
var __dirname = '../http1/home/examples';

console.log(__dirname);


http.createServer(connect() 
		.use(connect.logger())
		.use(connect.static(__dirname + '/public_html'), {redirect:true})

).listen(8124);

console.log('Server running on 8124...');