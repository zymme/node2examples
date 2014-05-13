/**
 * UDP server node file
 */

var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo) {
	
	console.log('Message: ' + msg + ' from ' + rinfo.address + ':' + rinfo.port);
	
});	//server.on


server.bind(8124);

console.log('UDP Server running on 8124...');