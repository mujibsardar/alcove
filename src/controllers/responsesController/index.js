const express = require('express');
const responseService = require('../../services/response');
let router = express.Router();

// Add New Response to Survey
router.post('/:surveyId', responseService.addResponse);

module.exports = router;
