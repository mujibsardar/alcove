const express = require('express');
const Survey = require('../../models/survey');

const getSurveys = async (req, res, next) => {
    try {
        let surveys = await Survey.getSurveys();

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
                'message': 'survey created successfully',
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
            'description': 'something went wrong, Please try again',
            'message': error.message
        });
    }
}

module.exports = {
    getSurveys: getSurveys,
    createSurvey: createSurvey
}
