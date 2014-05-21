/**
 * New node file for weight model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//create the weight model
var Weight = new Schema({
	sn : {type : String, require : true, trim : true, unique : true},
	name : {type : String, required : true, trim : true},
	weight : Number,
	day : String
});


module.exports = mongoose.model('Weight', Weight);