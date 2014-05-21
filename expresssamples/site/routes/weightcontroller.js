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
	
	var weight = {
			sn : req.body.weightsn,
			name : req.session.username,
			weight : req.body.weight,
			day : req.body.day
	};
	
	var weightObj = new Weight(weight);
	
	weightObj.save(function(err, data) {
		
		if(err) {
			res.send(err);
		}
		else {
			console.log(data);
			res.render('displayweightmongo', {title : 'Weight added', weight : weight, username : req.session.username });
		}
		
	});
	
};