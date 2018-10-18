const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProjectsSchema = new Schema({
	projectName: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	user:{
		type: Schema.Types.ObjectId,
		ref:'users'
	},
	pm:{
		type: Schema.Types.ObjectId,
		ref:'users',
		required: true
	},
	spm:{
		type: Schema.Types.ObjectId,
		ref:'users',
		required: true
	},
	status:{
		type: Boolean,
		required: true,
		default: true
	},
	mCiklumPMinvolved:{
		type: Boolean,
		required: true,
		default: true
	},
	CiklumBAinvolved:{
		type: Boolean,
		required: true,
		default: true
	},
	CiklumArchinvolved:{
		type: Boolean,
		required: true,
		default: true
	},
	createdDate:{
		type: Date,
		default: Date.now
	},
	modifiedDate:{
		type: Date,
		default: Date.now
	}
});

//Create collection and add schema
mongoose.model('projects', ProjectsSchema);