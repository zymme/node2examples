/**
 * tcp client node file
 */

var net = require('net');


//create client socket and set encoding
var client = new net.Socket();

client.setEncoding('utf8');

//connect to server
client.connect('8124', 'localhost', function() {
	
	console.log('connected to server');
	client.write('Who needs a browser to communicate!');
		
});	//client.connect

//prepare for input from terminal
process.stdin.resume();

//when receive data, send to server
process.stdin.on('data', function(data) {
	
	client.write(data);
	
});

//when we receive data back, print it to the console
client.on('data', function(data) {
	
	console.log(data);
	
});

//when server closes
client.on('close', function() {
	
	console.log('connection to server closed')
	
});