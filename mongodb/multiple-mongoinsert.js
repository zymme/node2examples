/**
 * New node file
 */

var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect : true});

var db = new mongodb.Db('exampleDb', server);

//open database connection
db.open(function(err, db) {
	
	if(!err) {
		db.collection('weights', function(err, collection) {
			
			//remove all weights documents
			collection.remove(null, {safe : true}, function(err, result) {
				
				if(!err) {
					console.log('result of remove ' + result);
				}
				
				//create two records
				var weight1 = {name : 'Dave Zimmer', 
						weight : '237.2',
						day : 20140520 };
				
				var weight2 = { name : 'Dave Zimmer', 
						weight : '236.6', 
						day : 20140519 };
				
				collection.insert(weight1);
				collection.insert(weight2, {safe : true}, function(err, result) {
					
					if(err) {
						console.log(err);
					}
					else {
						console.log(result);
					}
					
					console.log('closing database connection...');
					db.close();
					
				});
				
			});
			
		});
	}
	
	
});
