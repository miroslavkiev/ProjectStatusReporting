const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReportSchema = new Schema({
	projectName: {
		type: Schema.Types.ObjectId,
		ref:'projects',
		required: true
	},
	overallStatusRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	overallStatusComment: {
		type: String,
		required: true
	},
	plans: {
		type: String,
		required: true
	},
	startDate: {
		type: Date,
		required: true
	},
	SOWEndDate: {
		type: Date
	},
	SOWExtensionProbability: {
		type: Number
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
	staffingRAG: {
		type: String,
		enum: ['red', 'amber', 'green'],
		required: true
	},
	staffingComments: {
		type: String
	},
	managementSupportFlag: {
		type: Boolean,
		required: true
	},
	managementSupportComment: {
		type: String
	},
	pm:{
		type: Schema.Types.ObjectId,
		ref:'users'
	},
	spm:{
		type: Schema.Types.ObjectId,
		ref:'users'
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
mongoose.model('reports', ReportSchema);