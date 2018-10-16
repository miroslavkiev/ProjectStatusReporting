const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReportSchema = new Schema({
	projectName: {
		type: Schema.Types.ObjectId,
		ref:'projects',
		required: true
	},
	news: {
		type: String,
		required: true
	},
	plans: {
		type: String,
		required: true
	},
	milestones: {
		type: String,
		required: true
	},
	customerRelationshipRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	customerRelationshipComment: {
		type: String
	},
	teamMoraleRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	teamMoraleComment: {
		type: String
	},
	prodStabilityRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	prodStabilityComment: {
		type: String
	},
	grossMargin: {
		type: Number,
		required: true
	},
	revenue: {
		type: Number,
		required: true
	},
	risksIssuesRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	risksIssuesComments: {
		type: String
	},
	managementSupportFlag: {
		type: Boolean,
		required: true
	},
	managementSupportComment: {
		type: String
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
mongoose.model('reports', ReportSchema);