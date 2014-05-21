/**
 * New node file
 */
var express = require('express');
var router = express.Router();

router.delete('/weights/:id/delete', function(req, res, next) {
	
	console.log('in delete function for id: ' + req.params.id);
	
	var indx = req.params.id - 1;
	console.log('index is : ' + indx);
	
	var weights = req.session.weightsarray;
	if(!weights) {
		res.send('No weights data exists - cannot delete ');
	}
	
	console.log('weightsarray has now ' + weights.length);
	
	delete weights[indx];
	
	console.log('weightsarray is now ' + weights.length);
	
	req.session.weightsarray = weights;
	
	console.log('weightsarray is now ' + req.session.weightsarray.length);
	
	res.send('Deleted weight with id: ' + req.params.id);
	
});

module.exports = router;