var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	taskName : {type : String, required : true},
	taskBody : {type : String, required : true},
	done : { type : Boolean, "default" : false},
	userEmail : {type : String, required : true, index : true}
});

mongoose.model("Task", taskSchema);