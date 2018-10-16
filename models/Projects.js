const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProjectsSchema = new Schema({
	projectName: {
		type: String,
		required: true
	},
	user:{
		type: Schema.Types.ObjectId,
		ref:'users'
	},
	date:{
		type: Date,
		default: Date.now
	}
});

//Create collection and add schema
mongoose.model('projects', ProjectsSchema);