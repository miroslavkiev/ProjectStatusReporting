const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Project = mongoose.model('projects');
const Report = mongoose.model('reports');

router.get('/add', (req, res) => {
	Project.find({})
		.then(projects => {
			res.render('report/add', {projects: projects});
		});
});

router.post('/', ensureAuthenticated, (req, res) => {
	//map fields
	let spm = '';

	Project.findOne({projectName: req.body.projectName})
		.then(project => {spm = project.spm});

	const newReport = {
		projectName: req.body.projectName,
		overallStatusRAG: req.body.overallStatusRAG,
		overallStatusComment: req.body.overallStatusComment,
		plans: req.body.plans,
		startDate: req.body.startDate,
		SOWEndDate: req.body.SOWEndDate,
		SOWExtensionProbability: req.body.SOWExtensionProbability,
		milestones: req.body.milestones,
		customerRelationshipRAG: req.body.customerRelationshipRAG,
		customerRelationshipComment: req.body.customerRelationshipComment,
		teamMoraleRAG: req.body.teamMoraleRAG,
		teamMoraleComment: req.body.teamMoraleComment,
		prodStabilityRAG: req.body.prodStabilityRAG,
		prodStabilityComment: req.body.prodStabilityComment,
		grossMargin: req.body.grossMargin,
		revenue: req.body.revenue,
		risksIssuesRAG: req.body.risksIssuesRAG,
		risksIssuesComment: req.body.risksIssuesComment,
		staffingRAG: req.body.staffingRAG,
		staffingComments: req.body.staffingComments,
		managementSupportFlag: req.body.managementSupportFlag,
		managementSupportComment: req.body.managementSupportComment,
		pm: req.user.id,
		spm: spm
	}

	//Create report
	new Report(newReport)
		.save()
		.then(res.send('Report was added!'))
});

module.exports = router;