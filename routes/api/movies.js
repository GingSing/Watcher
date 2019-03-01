const express = require('express');
const Movies = require('../../services/movieService');
const router = express.Router();


router.get('/', Movies.discoverMovies);
router.get('/trending', Movies.getTrendingMovies);


module.exports=router;