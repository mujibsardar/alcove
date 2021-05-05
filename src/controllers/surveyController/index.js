const express = require('express');
const surveyService = require('../../services/survey');
let router = express.Router();

router.get('/', surveyService.getSurveys);

// router.get('/:id', surveyService.getsurveyById);
//
// router.post('/', surveyService.createsurvey);
//
// router.put('/:id', surveyService.updatesurvey);
//
// router.delete('/:id', surveyService.deletesurvey);

module.exports = router;
