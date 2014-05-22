/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var weightOracleController = require('./weightoraclecontroller');


//have two different methods exposed - post to add weight - get to retrieve for username

router.post('/weights-oracle/add', function(req, res, next) {
	
	console.log('entered adding weight to oracle for user ' + req.session.username);
	console.log('adding ' + req.body.weight + ' as the recording for the day ' + req.body.day);
	
	weightOracleController.save(req, res, next);
	
});


//router.get('/weights/:id', function(req, res, next) {
//	
//	console.log('retrieving weight info for: ' + req.session.username);
//	console.log('id we are retrieving weight for ' + req.params.id);
//	
//	var weights = req.session.weightsarray;
//	if(!weights) {
//		res.send("Weights info is not available - contact the sysadmin - zed@pinnacol.com");
//	}
//	
//	var indx = parseInt(req.params.id);
//	
//	var weight = weights[indx-1];
//	if(!weight) {
//		res.send("There is no weight info for id " + req.params.id);
//	}
//	else {
//		
//		
//		res.render('displayweight', { username : req.session.username, day : weight.day, weight : weight.weight });
//	}
//	
//	
//	
//});

router.get('/weights-oracle/add/amount', function(req, res, next) {
	
	res.render('addweightoracle', { username: req.session.username });
	
});

router.get('/weights-oracle', function(req, res, next) {
	
	console.log('user requesting list of weight-oracle info...');
	
	weightOracleController.index(req, res, next);
	
	
	
});


module.exports = router;