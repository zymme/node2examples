/**
 * sample dns lookup node file
 */

var dns = require('dns');

var site = process.argv[2];

//console.log("Number of args passed " + process.argv.length);
//
//console.log('argv[1] ' + process.argv[1]);
//console.log('argv[2] ' + process.argv[2]);

function callback(err, ip) {
	if(err) {
		throw err;
	}
	
	console.log(ip);
}

console.log('about to call dns lookup...');

dns.lookup(site, callback);

