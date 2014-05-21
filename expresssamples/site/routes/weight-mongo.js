/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var Weight = require('../models/weight.js');
var weightController = require('./weightcontroller');

//have two different methods exposed - post to add weight - get to retrieve for username

router.post('/weights-mongo/add', function(req, res, next) {
	
	console.log('entered adding weight to mongo for user ' + req.session.username);
	console.log('adding ' + req.body.weight + ' as the recording for the day ' + req.body.day);
	
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
	
});


router.get('/weights/:id', function(req, res, next) {
	
	console.log('retrieving weight info for: ' + req.session.username);
	console.log('id we are retrieving weight for ' + req.params.id);
	
	var weights = req.session.weightsarray;
	if(!weights) {
		res.send("Weights info is not available - contact the sysadmin - zed@pinnacol.com");
	}
	
	var indx = parseInt(req.params.id);
	
	var weight = weights[indx-1];
	if(!weight) {
		res.send("There is no weight info for id " + req.params.id);
	}
	else {
		
		
		res.render('displayweight', { username : req.session.username, day : weight.day, weight : weight.weight });
	}
	
	
	
});

router.get('/weights-mongo/add/amount', function(req, res, next) {
	
	res.render('addweightmongo', { username: req.session.username });
	
});

router.get('/weights-mongo', function(req, res, next) {
	
	console.log('user requesting list of weight-mongo info...');
	
	weightController.index(req, res, next);
	
	
	
});


module.exports = router;