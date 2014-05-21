/**
 * New node file
 */
var express = require('express');
var router = express.Router();



router.get('/reset', function(req, res, next) {
	
	console.log("User requested to reset the session...");
	
	req.session = null;
	
	
	console.log('Testing value of weightsarray/username... ');
	
	if(!req.session) {
		console.log('Session is null ...');
	}
	
	res.redirect('/whoareyou.html');
	
});




module.exports = router;