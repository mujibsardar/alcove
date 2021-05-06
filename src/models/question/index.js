const surveys = require('../../database/data').Surveys;
const utils = require('../../utils');

module.exports = {
    removeQuestion: function(params) {
      const surveyID = parseInt(params.surveyId);
      const questionID = parseInt(params.questionId);
      surveys.forEach((survey, index) => {
        if(survey.id === surveyID) {
            let foundQuestionIndex = survey.questions.findIndex(question => question.id === questionID);
            survey.questions.splice(foundQuestionIndex, 1);
            surveys[index] = survey;
        }
    });
      return surveys;
    },
    addQuestion: function(surveyID, params) {
      surveyID = parseInt(surveyID);
      const newQuestionID = utils.generateID();
      const newQuestion = {id: newQuestionID, ...params};
      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });
      // TODO Removed let survey = ....
      surveys[surveyIdx].questions.push(newQuestion);
      return surveys;
    },
    modifyQuestion: function(surveyID, params) {

      const questionID = parseInt(params.id);
      surveyID = parseInt(surveyID);
      const updatedQuestion = params;
      surveys.forEach((survey, index) => {
        if(survey.id === surveyID) {
            const foundQuestionIndex = survey.questions.findIndex(question => question.id === questionID);
            const question = survey.questions[foundQuestionIndex];
            survey.questions[foundQuestionIndex] = {...question, ...updatedQuestion};
            surveys[index] = survey;
        }
      });
      return surveys;
    },
    reorderQuestions: function(surveyID, params) {
      surveyID = parseInt(surveyID);
      const questionOrder = params.order;
      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });
      const originalQuestions = surveys[surveyIdx].questions;
      let newQuestions = [];
      questionOrder.forEach((id, index) =>  {
        // Get question with id
        let question = originalQuestions.find(q => {
          return q.id === parseInt(id)
        })
      	newQuestions.push(question);
      });
      surveys[surveyIdx].questions = newQuestions;
      return surveys;
    }
};
