/**
 * New node file
 */

var oracle = require('oracle');
var weight = require('../models/weightoracle');

var connectData = {
		hostname : 'littlebear',
		port : 1521,
		database : 'twcis',
		user : 'wcis_dba',
		password : 'rufully3t'
	};


exports.index = function(req, res, next) {
	
	oracle.connect(connectData, function(err, connection) {
		
		connection.execute("SELECT * from weights", [], function(err, results) {
			
			if(err) {
				console.log("Error executing query:", err);
				res.send("Error querying " + err);
				connection.close();
			}
			
			console.log(results);
			connection.close();
			
			res.render('displayweightlistoracle', {title : 'Weight List', weights : results});
			
		});
		
	});
	
};

exports.save = function(req, res, next) {
	
	var theweight = new weight();
	
	oracle.connect(connectData, function(err, connection) {
		
		connection.setAutoCommit(true);
		
		theweight.sn = req.body.weightsn;
		theweight.name = req.session.username;
		theweight.weight = req.body.weight;
		theweight.day = req.body.day;
			
				
		connection.execute('INSERT INTO weights (sn, username, weight, day) VALUES (:1, :2, :3, :4)',
				[theweight.sn, theweight.name, theweight.weight, theweight.day],
				function(err, results) {
						
					if(err) {
						console.log('Error executing query:', err);
						return;
					}
					
					console.log(results);
					connection.close(); //call only when query is finished executing
					
					res.render('displayweightoracle', {title : 'Weight added', weight : theweight, username : req.session.username });
		});
		
	});
	
	
	
};