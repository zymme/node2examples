/**
 * New node file
 */
var tstmod = require('./testclass');


//function Weight(sn) {
//	this.sn = sn;
//}
//
//
//var myweight = new Weight(2);

var myweight = new tstmod();
myweight.sn = 5;
myweight.name = 'zed';
myweight.day = '20140521';

console.log(myweight.sn);
console.log(myweight.name);
console.log(myweight.day);