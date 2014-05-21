/**
 * New node file
 */
var Weight = require('../models/weight.js');

exports.index = function(req, res, next) {
	
	Weight.find({}, function(err, docs) {
		
		console.log('in Weight.find() function call...')
		
		console.log(docs);
		
		res.render('displayweightlistmongo', {weights : docs});
		
	});
	
};

exports.save = function(req, res, next) {
	
	console.log('in Weight.save() function call...');
	
	
	
};