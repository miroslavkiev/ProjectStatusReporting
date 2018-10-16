const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');
const mongoose = require('mongoose');
// const Story = mongoose.model('stories');

router.get('/', (req, res) => {
	res.render('index/welcome');
});

// router.get('/reports', ensureAuthenticated, (req, res) => {
// 	Story.find({user:req.user.id})
// 		.then(stories => {
// 			res.render('index/reports', {
// 				stories: stories
// 			});
// 		});
// });

module.exports = router;