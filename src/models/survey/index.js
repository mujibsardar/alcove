const surveys = require('../../database/data').Surveys;
const utils = require('../../utils');

module.exports = {
    getSurveys: function() {
      return surveys;
    },
    createSurvey: function(params) {
      if(!params.title || !params.title === ''){
        throw Error("You must provide a valid title")
      }
      let newSurvey = {id: utils.generateID(), title: params.title, questions: params.questions, responses: []}
      surveys.push(newSurvey);
      return surveys;
    }
};
