const express = require('express');
const surveyService = require('../../services/survey');
let router = express.Router();

// Get All Surveys
router.get('/', surveyService.getSurveys);

// Create New Survey
router.post('/', surveyService.createSurvey);

module.exports = router;
