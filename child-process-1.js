/**
 * Sample child process using find and grep commands node file
 */

var spawn = require('child_process').spawn;
var find = spawn('find', ['.', '-ls']);
var grep = spawn('grep', ['tc']);

//set encoding for grep
grep.stdout.setEncoding('utf8');

//direct results of find to grep
find.stdout.on('data', function(data) {
	console.log('in find.stdout.on ...');
	console.log('data: ' + data.toString());
	
	grep.stdin.write(data);
	
});


//run grep and output results
//grep.stdout.on('data', function(data) {
//	console.log('in grep.stdout.on ...');
//	
//	console.log(data);
//	
//});
//

//error handling for grep/find
find.stderr.on('data', function(data) {
	
	console.log('find stderr: ' + data);
	
});


grep.stderr.on('data', function(data){
	
	console.log('grep stderr: ' + data);
	
});

//exit handling for both - grep/find
find.on('exit', function(code) {
	
	if(code !== 0) {
		console.log('find process exited with code ' + code);
	}
	
	//end grep process
	grep.stdin.end();
	
});

grep.on('exit', function(code) {
	
	if(code !== 0) {
		console.log('grep process exited with code ' + code);
	}
	
});

//need to listen for the close event
find.on('close', function(code) {
	
	if(code !== 0 ) {
	
		console.log('find process exited with code ' + code);
		
	}
	
	//end grep process
	grep.stdin.end();
	
	
});	//find.on 'close'
















