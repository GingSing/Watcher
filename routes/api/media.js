const express = require('express');
const Media = require('../../services/mediaService');
const router = express.Router();


router.get('/trending', Media.getTrending);


module.exports=router;