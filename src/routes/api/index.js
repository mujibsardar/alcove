const surveyController = require('./../../controllers/surveyController');
const responsesController = require('./../../controllers/responsesController');

const express = require('express');
let router = express.Router();
router.use('/surveys', surveyController);
// router.use('/responses', responsesController);
module.exports = router;
