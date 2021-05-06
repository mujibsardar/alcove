const express = require('express');
const surveyService = require('../../services/survey');
let router = express.Router();

// Get All Surveys
router.get('/', surveyService.getSurveys);

// Create New Survey
router.post('/', surveyService.createSurvey);

// Remove Question surveyid, Questionid Params Required
router.delete('/question/:surveyId/:questionId', surveyService.removeQuestion);

// Add New Question
router.post('/question/:surveyId', surveyService.addQuestion);

// Modify a Question
router.put('/question/:surveyId', surveyService.modifyQuestion);

// Reorder Questions
router.put('/question/reorder/:surveyId', surveyService.reorderQuestions);

// Add New Response to Survey
router.post('/response/:surveyId', surveyService.addResponse);

module.exports = router;
