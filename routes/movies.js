const express = require('express');
const Movies = require('../services/movieService');
const router = express.Router();


router.get('/', Movies.discoverMovies);


module.exports=router;