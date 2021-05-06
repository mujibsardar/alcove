const express = require('express');
const Response = require('../../models/response');

const addResponse = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Response.addResponse(surveyID, req.body);

        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'response added successfully',
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
    addResponse: addResponse
}
