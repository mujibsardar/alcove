const express = require('express');
const questionService = require('../../services/question');
let router = express.Router();

// Remove Question
router.delete('/:surveyId/:questionId', questionService.removeQuestion);

// Add New Question
router.post('/:surveyId', questionService.addQuestion);

// Modify a Question
router.put('/:surveyId', questionService.modifyQuestion);

// Reorder Questions
router.put('/reorder/:surveyId', questionService.reorderQuestions);

module.exports = router;
