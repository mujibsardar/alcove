const express = require('express');
const surveyService = require('../../services/survey');
let router = express.Router();

// Get All Surveys
router.get('/', surveyService.getSurveys);

// Create New Survey
router.post('/', surveyService.createSurvey);

// Remove Question surveyid, Questionid Params Required
router.get('/removequestion', surveyService.removeQuestion);
// router.delete('/:id', surveyService.deletesurvey);

// Add New Question
router.post('/addquestion', surveyService.addQuestion);

// Modify a Question
router.put('/question/:surveyId', surveyService.modifyQuestion);

// Reorder Questions
router.put('/question/reorder/:surveyId', surveyService.reorderQuestions);

// Add New Response to Survey
router.post('/response/:surveyId', surveyService.addResponse);

module.exports = router;
