/**
 * New node file
 */
var express = require('express');
var router = express.Router();


router.get('/weighttest', function(req, res) {
	
	console.log('in weighttest route...');
	
	console.log('username in session is: ' + req.session.username);
	
	res.render('weighttest.jade', { username : req.session.username });
	
});


module.exports = router;