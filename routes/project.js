const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Project = mongoose.model('projects');

router.get('/add', ensureAuthenticated, (req, res) => {
			res.render('project/add');
});

router.get('/', (req, res) => {
	Project.find({})
	.populate('user')
		.then(projects => {
		res.render('project/list', {projects: projects});
	});
});

router.get('/edit/:id', ensureAuthenticated, (req, res) => {
	Project.findOne({_id: req.params.id})
		.then(project => {
			res.render('project/edit', {project: project});
		});
});

router.delete('/:id', ensureAuthenticated, (req, res) => {
	Project.deleteOne({_id: req.params.id})
		.then(() => {
			res.redirect('/project');
		})
});

router.post('/', ensureAuthenticated, (req, res) => {

	//map fields
	const newProject = {
		projectName: req.body.projectName,
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

			project.save()
				.then(project => {
					res.redirect('/project');
				});
		})
});

module.exports = router;