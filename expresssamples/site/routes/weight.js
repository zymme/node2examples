/**
 * New node file
 */
var express = require('express');
var router = express.Router();

//have two different methods exposed - post to add weight - get to retrieve for username

router.post('/weights/add', function(req, res, next) {
	
	console.log('entered adding weight for user ' + req.session.username);
	console.log('adding ' + req.body.weight + ' as the recording for the day ' + req.body.day);
	
	
	//debug - temporary to reset weights array
	//req.session.weightsarray = null;
	
	var weights = req.session.weightsarray;
	
	if(!weights){
		console.log('weights array is empty...');
		
		var indx = 1;
		weights = [
				{ id : indx,
					name : req.session.username,
					weight : req.body.weight,
					day : req.body.day
					}
				];
		
		//put weights array into session
		req.session.weightsarray = weights;
		
		console.log('weights array : ' + req.session.weightsarray[0].id + ' ' + req.session.weightsarray[0].name + ' ' + req.session.weightsarray[0].weight);
		
		res.redirect('/weights/' + indx);
		
	}
	else {
		console.log('weights array has some values...');
		
		var indx2 = weights.length + 1;
		weights[weights.length] = { id : indx2,
				name : req.session.username,
				weight : req.body.weight,
				day : req.body.day
				};
		
		req.session.weightsarray = weights;
		
		console.log('weightsarray is now ' + req.session.weightsarray.length);
	
		var wa = req.session.weightsarray.length;
		for (var i = 0; i < wa; i++) {
			console.log('id: ' + req.session.weightsarray[i].id);
		}
		
	}
	
	res.redirect('/weights/' + indx2);
	
	//res.send('added weight for user: ' + req.session.username);
	
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

router.get('/weights/add/amount', function(req, res, next) {
	
	res.render('addweight', { username: req.session.username });
	
});

router.get('/weights', function(req, res, next) {
	
	console.log('user requesting list of weight info...');
	
	var weights = req.session.weightsarray;
	if(!weights) {
		console.log('No weight information stored');
		res.send('No weight information to display!');
	}
	
	
	for(var i = 0; i < weights.length; i++) {
		
		if(!weights[i]) {
			console.log('weight info is null');
		}
		else {
			console.log(weights[i].id + ' ' + weights[i].name + ' ' + weights[i].day + ' ' + weights[i].weight);
		}
	}
	
	res.render('displayweightlist', {weights : weights});
	
});


module.exports = router;