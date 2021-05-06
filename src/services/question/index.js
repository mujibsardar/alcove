const express = require('express');
const Question = require('../../models/question');

const removeQuestion = async (req, res, next) => {
    try {
        let surveys = await Question.removeQuestion(req.params);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'surveys fetched successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const addQuestion = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.addQuestion(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'surveys fetched successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const modifyQuestion = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.modifyQuestion(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'surveys fetched successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const reorderQuestions = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.reorderQuestions(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'surveys fetched successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}


module.exports = {
    removeQuestion: removeQuestion,
    addQuestion: addQuestion,
    modifyQuestion: modifyQuestion,
    reorderQuestions: reorderQuestions
}
