/**
 * New node file
 */

var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect : true});
var db = new mongodb.Db('exampleDb', server);

//open database connection
db.open(function(err, db) {
	
	//access or create weights collection
	db.collection('weights', function(err, collection) {
		
		//update 
		collection.update({ id : 3 }, 
				{ $set : { name : 'Zedster' } }, { safe : true }, function(err, result) {
			
//					console.log('in update of collection...');
					
					if(err) {
						console.log(err);
					}
					else {
						console.log(result);
						
						//query for updated record
						collection.findOne({id:3}, function(err, doc) {
							if(err) {
								console.log(err);
							}
							else {
								console.log(doc);
								db.close();
							}
							
						});
					}
		});
		
	});
	
});
