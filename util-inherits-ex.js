/**
 * Sample of util inherits use in node.
 */

var util = require('util');

//define first javascript object

function first() {
	var self = this;
	this.name = 'first';
	
	this.test = function() {
		console.log(self.name);
	}
	
}

first.prototype.output = function() {
	console.log(this.name);
}

//inherit from first object
function second() {
	second.super_.call(this);
	this.name = 'second';
}

util.inherits(second, first);

var two = new second();

function third(func) {
	
	this.name = 'third';
	this.callMethod = func;
	
}

var three = new third(two.test);

two.output();
two.test();
three.callMethod();

