const Question = require('../../models/question');

const removeQuestion = async (req, res, next) => {
    try {
        let surveys = await Question.removeQuestion(req.params);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'question removed successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'no surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, please try again',
            'message': error.message
        });
    }
}

const addQuestion = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.addQuestion(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'question added successfully',
                'data': surveys
            });
        }
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'no surveys found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, please try again',
            'message': error.message
        });
    }
}

const modifyQuestion = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.modifyQuestion(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 'question modified successfully',
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

const reorderQuestions = async (req, res, next) => {
    try {
        const surveyID = req.params.surveyId
        let surveys = await Question.reorderQuestions(surveyID, req.body);
        if (surveys.length > 0) {
            return res.status(200).json({
                'message': 're-order of questions was successfull',
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
    removeQuestion: removeQuestion,
    addQuestion: addQuestion,
    modifyQuestion: modifyQuestion,
    reorderQuestions: reorderQuestions
}
