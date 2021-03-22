const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const campgrounds = require('../controllers/campgrounds');
const Campground = require('../models/campground');
const { isLoggedIn, validateCampground, isAuthor } = require('../middleware')



router.get('/', catchAsync(campgrounds.index));

router.get('/new', isLoggedIn, (campgrounds.renderNewForm));

router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.editCampground))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground))

router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))

router.get('/:id', catchAsync(campgrounds.showCampground))

module.exports = router;
