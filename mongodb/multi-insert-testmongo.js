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
				var weight1 = {id : 1, 
						name : 'Dave Zimmer', 
						weight : '237.2',
						type : 'A',
						day : 20140520 };
				
				var weight2 = { id : 2, 
						name : 'Dave Zimmer', 
						weight : '236.6', 
						type : 'A',
						day : 20140519 };
				
				var weight3 = { id: 3,
						name : 'Dave Zimmer', 
						weight : '235.5', 
						type : 'R',
						day : 20140521 };
				
				
			
				collection.insert([weight1, weight2, weight3], {safe : true}, function(err, result) {
					
					if(err) {
						console.log('error: ' + err);
					}
					else {
						//return all documents
						collection.find().toArray(function(err, docs) {
							console.log(docs);
							db.close();
						});
//						
						//finds documents with a type='A' and does not show that field in the results
//						collection.find({type:'A'}, {fields:{type:0}}).toArray(function(err, docs) {
//							if(err) {
//								console.log(err);
//							}
//							else {
//								console.log(docs);
//								console.log('closing database connection...');
//								db.close();
//							}
//						});
						
					}
					
					
				});
				
			});
			
		});
	}
	
	
});
