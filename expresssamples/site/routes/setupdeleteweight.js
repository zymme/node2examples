/**
 * New node file
 */
var express = require('express');
var router = express.Router();

router.get('/weights/:id/delete', function(req, res, next) {
	
	console.log('getting weight id: ' + req.params.id + ' for delete confirmation...');
	var weightobj = req.session.weightsarray[req.params.id - 1];
	
	if(!weightobj){
		res.send('There is no weight to delete for id=' + req.params.id);
	}
	
	
	res.render('deleteweight', { title : 'Delete Weight Confirmation', weight : weightobj });
	
	
});


module.exports = router;