const surveys = require('../../database/data').Surveys;
const utils = require('../../utils');

module.exports = {
    addResponse: function(surveyID, params) {
      const responseID = utils.generateID();
      let response ={id: responseID, ...params.response};
      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === parseInt(surveyID)
      });
      surveys[surveyIdx].responses.push(response);
      return surveys;
    }
};
