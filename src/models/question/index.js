const surveys = require('../../database/data').Surveys;
const utils = require('../../utils');

module.exports = {
    removeQuestion: function(params) {
      const surveyID = parseInt(params.surveyId);
      const questionID = parseInt(params.questionId);

      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });

      if(surveyIdx === -1){
        throw Error(`Cannot locate survey with the given survey id ${surveyID}`);
      }

      const survey = surveys[surveyIdx];
      const foundQuestionIndex = survey.questions.findIndex(question => question.id === questionID);

      if(foundQuestionIndex === -1){
        throw Error(`Cannot locate question with the given question id ${questionID}`);
      }

      survey.questions.splice(foundQuestionIndex, 1);
      surveys[surveyIdx] = survey;

      return surveys;
    },
    addQuestion: function(surveyID, params) {
      surveyID = parseInt(surveyID);
      const newQuestionID = utils.generateID();
      const newQuestion = {id: newQuestionID, ...params};
      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });

      if(surveyIdx === -1){
        throw Error(`Cannot locate survey with the given survey id ${surveyID}`);
      }

      surveys[surveyIdx].questions.push(newQuestion);
      return surveys;
    },
    modifyQuestion: function(surveyID, params) {

      const questionID = parseInt(params.id);
      surveyID = parseInt(surveyID);
      const updatedQuestion = params;

      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });

      if(surveyIdx === -1){
        throw Error(`Cannot locate survey with the given survey id ${surveyID}`);
      }

      const survey = surveys[surveyIdx];
      const foundQuestionIndex = survey.questions.findIndex(question => question.id === questionID);

      if(foundQuestionIndex === -1){
        throw Error(`Cannot locate question with the given question id ${questionID}`);
      }

      const question = survey.questions[foundQuestionIndex];
      survey.questions[foundQuestionIndex] = {...question, ...updatedQuestion};
      surveys[surveyIdx] = survey;

      return surveys;
    },
    reorderQuestions: function(surveyID, params) {
      surveyID = parseInt(surveyID);
      const questionOrder = params.order;

      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === surveyID
      });

      if(surveyIdx === -1){
        throw Error(`Cannot locate survey with the given survey id ${surveyID}`);
      }

      const originalQuestions = surveys[surveyIdx].questions;

      if(originalQuestions.length != questionOrder.length){
        throw Error(`You must provide the ids for ALL questions in this survey.
            You provided ${questionOrder.length} number of id's.
              There are ${originalQuestions.length} questions in this survey`);
      }

      let newQuestions = [];
      questionOrder.forEach((id, index) =>  {
        // Get question with id
        let question = originalQuestions.find(q => {
          return q.id === parseInt(id)
        })

        if(question === undefined){
          throw Error(`One of the question ids
            ${id} does not exist`);
        }

      	newQuestions.push(question);
      });
      surveys[surveyIdx].questions = newQuestions;
      return surveys;
    }
};
