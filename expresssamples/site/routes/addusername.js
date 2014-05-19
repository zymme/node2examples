/**
 * New node file
 */
var express = require('express');
var router = express.Router();


router.post('/usernames/add/:id', function(req, res, next) {
	
	console.log('adding the username to the session...');
	console.log('username sent from client: ' + req.body.username);
	
	console.log('req.session.username ' + req.session.username);
	
	console.log('req.id ' + req.params.id);
	
	if(!req.session.username) {
		console.log('username not set in session');
		req.session.username = req.body.username;
		
		console.log('username is now ' + req.session.username);
	}
	
	res.send('added ' + req.session.username + ' to the session!');
	
	
});

module.exports = router;