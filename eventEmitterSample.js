/**
 * event-based object that inherits from EventEmitter node file
 */
var util = require('util');
var eventEmitter = require('events').EventEmitter;

var fs = require('fs');

function inputChecker(name, file) {
	
	this.name = name;
	this.writeStream = fs.createWriteStream("./" + file + ".txt", { 'flags' : 'a',
																	'encoding' : 'utf8',
	
																	'mode' : 0666});
};

util.inherits(inputChecker, eventEmitter);

//create a check method on the inputChecker javascript object
inputChecker.prototype.check = function check(input) {
	
	var command = input.toString().trim().substr(0,3);
	
	if(command === 'wr:') {
		this.emit('write', input.substr(3, input.length));
	}
	else if(command === 'en:') {
		this.emit('end');
	}
	else {
		this.emit('echo', input);
	}

};


var ic = new inputChecker('Zed', 'output');

ic.on('write', function(data) {
	console.log('in write event ...');
	this.writeStream.write(data, 'utf8');
	
});

ic.on('end', function() {
	process.exit();
});

ic.on('echo', function(data) {
	
	console.log(this.name + ' wrote ' + data);
	
});

//process input from terminal
process.stdin.resume();

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
	
	ic.check(input);
	
});




