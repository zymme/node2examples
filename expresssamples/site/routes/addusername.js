/**
 * New node file
 */
var express = require('express');
var router = express.Router();


router.post('/usernames/add', function(req, res, next) {
	
	console.log('adding the username to the session...' + req.session.id);
	console.log('username sent from client: ' + req.body.username);
	
	req.session.username = req.body.username;
	
	console.log('req.session.username ' + req.session.username);
	
	if(!req.session.username) {
		console.log('username not set in session');
		req.session.username = req.body.username;
		
		console.log('username is now ' + req.session.username);
	}
	
	res.send('You have been registered ' + req.session.username + ' to the session!' + ' </br> Please click <a href=\'/weights/add/amount\'>here</a> to register your weight for today.');
	
	
});

module.exports = router;