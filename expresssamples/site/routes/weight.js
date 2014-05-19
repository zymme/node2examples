/**
 * New node file
 */
var express = require('express');
var router = express.Router();

//have two different methods exposed - post to add weight - get to retrieve for username

router.post('/weight/add/:user', function(req, res, next) {
	
	console.log('entered adding weight for user ' + req.params.user);
	
	
	var weights = req.session.weightsarray;
	if(!weights){
		console.log('weights array is empty...');
	}
	else {
		console.log('weights array has some values...');
	}
	
	
	
	res.send('added weight for user: ' + req.params.user);
	
});


router.get('/weight/:user', function(req, res, next) {
	
	console.log('retrieving weight info for: ' + req.params.user);
	
});


module.exports = router;