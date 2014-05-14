/**
 * Callback functionality test node file
 */

var obj = function() {};

obj.prototype.someMethod = function(arg1, arg2_) {
	
	var arg2 = typeof(arg2_) === 'string' ? arg2_ : null;
	
	var callback_ = arguments[arguments.length -1];
	
	callback = (typeof(callback_) === 'function' ? callback_ : null);
	
	
	if(!arg2) {
		return callback(new Error('second argument missing or not a string'));
	}
	
	
	//here u could do some othe processing and return back to the callback the result - in this case
	//we are returning arg1 back to the callback function
	callback(arg1);
}

var test = new obj();


try {
	
	test.someMethod('test', "i'm a string", function(err, value) {
		
		if(err) {
			throw err;
		}
		
		console.log(value);
		
	});
}
catch(err) {
	console.error(err);
}


