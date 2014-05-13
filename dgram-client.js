/**
 * UDP client node file
 */

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

//prepare for input from terminal
process.stdin.resume();

process.stdin.on('data', function(data) {
	
	console.log("echoing: " + data.toString('utf8'));
	
	client.send(data, 0, data.length, 8124, "localhost", function(err, bytes) {
		
		if(err) {
			console.log('err: ' + err);
		}
		else {
			console.log('successful');
		}
		
	});
	
});