const surveyController = require('./../../controllers/surveyController');
const questionsController = require('./../../controllers/questionsController');
const responsesController = require('./../../controllers/responsesController');

const express = require('express');
let router = express.Router();
router.use('/surveys', surveyController);
router.use('/questions', questionsController);
router.use('/responses', responsesController);
module.exports = router;
