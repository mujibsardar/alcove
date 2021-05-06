const express = require('express');
const Survey = require('../../models/survey');

// TODO
// Update messages

const getSurveys = async (req, res, next) => {
    try {
        let surveys = await Survey.getSurveys(req.query);

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

const createSurvey = async (req, res, next) => {
    try {

        let surveys = await Survey.createSurvey(req.body);

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

const removeQuestion = async (req, res, next) => {
    try {
        let surveys = await Survey.removeQuestion(req.params);

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
        let surveys = await Survey.addQuestion(surveyID, req.body);

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
        let surveys = await Survey.modifyQuestion(surveyID, req.body);

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
        let surveys = await Survey.reorderQuestions(surveyID, req.body);

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

const addResponse = async (req, res, next) => {

    try {
        const surveyID = req.params.surveyId
        let surveys = await Survey.addResponse(surveyID, req.body);

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
    getSurveys: getSurveys,
    createSurvey: createSurvey,
    removeQuestion: removeQuestion,
    addQuestion: addQuestion,
    modifyQuestion: modifyQuestion,
    reorderQuestions: reorderQuestions,
    addResponse: addResponse
}
