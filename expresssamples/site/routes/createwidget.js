
//my inmemory widget
var widgets = [
	               {
	            	   id : 1,
	            	   name : 'My awesome widget',
	            	   price : 100.00,
	            	   descr : 'A super awesome hoser widget'
	               }
               
               ]

var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	
	console.log('posting a page to create a widget');
	console.log('widget name sent from client: ' + req.body.widgetname);
	
	console.log('req.session.username ' + req.session.username);
	
	if(!req.session.username) {
		console.log('username not set in session');
		req.session.username = 'zed';
		
		console.log('username is now ' + req.session.username);
	}
	
	res.send('added the widget!');
	
	
});

module.exports = router;
