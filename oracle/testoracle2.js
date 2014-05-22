var oracle = require('oracle');

var connectData = {
	hostname : 'littlebear',
	port : 1521,
	database : 'twcis',
	user : 'wcis_dba',
	password : 'rufully3t'
};

oracle.connect(connectData, function(err, connection) {
	
	connection.setAutoCommit(true);
	
	connection.execute('INSERT INTO weights (sn, username, weight, day) VALUES (:1, :2, :3, :4)',
			[2, 'zedusername', 234.4, '20140522'],
			function(err, results) {
					
				if(err) {
					console.log('Error executing query:', err);
					return;
				}
				
				console.log(results);
				connection.close(); //call only when query is finished executing
		
	});
	
});