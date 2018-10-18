const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ensureAuthenticated, ensureGuest, ensureAdmin} = require('../helpers/auth');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Project = mongoose.model('projects');

router.get('/add', ensureAdmin, (req, res) => {
	User.find({})
		.then(pm => {
			res.render('project/add', {
				pm: pm,
				spm: pm
			});
		})
});

router.get('/', (req, res) => {
	Project.find({})
		.populate('user')
		.then(projects => {
			res.render('project/list', {projects: projects});
		});
});

router.get('/edit/:id', ensureAdmin, (req, res) => {
	let pm = {};

	Project.findOne({_id: req.params.id})
		.then(User.find({})
			.then(user => {pm = user}))
		.then(project => {
			res.render('project/edit', {
				project: project,
				pm: pm,
				spm: pm
			});
		});
});

router.delete('/:id', ensureAdmin, (req, res) => {
	Project.deleteOne({_id: req.params.id})
		.then(() => {
			res.redirect('/project');
		})
});

router.post('/', ensureAuthenticated, (req, res) => {

	//map fields
	const newProject = {
		projectName: req.body.projectName,
		pm: req.body.pm,
		spm: req.body.spm,
		user: req.user.id
	}

	//Create story
	new Project(newProject)
		.save()
		.then(res.redirect('/project'))
});

router.put('/:id', ensureAuthenticated, (req, res) => {
	Project.findOne({
		_id: req.params.id
	})
		.then(project => {

			//New value
			project.projectName = req.body.projectName;
			project.pm = req.body.pm;
			project.spm = req.body.spm;

			project.save()
				.then(project => {
					res.redirect('/project');
				});
		})
});

module.exports = router;