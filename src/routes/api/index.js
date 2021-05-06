const surveyController = require('./../../controllers/surveyController');

const express = require('express');
let router = express.Router();
router.use('/surveys', surveyController);
module.exports = router;
