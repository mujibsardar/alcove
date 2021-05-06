const surveys = require('../../database/data').Surveys;
const utils = require('../../utils');

module.exports = {
    addResponse: function(surveyID, params) {
      const responseID = utils.generateID();
      let response ={id: responseID, ...params.response};

      if(params.response.length < 1){
        throw Error(`You must provide at least one response`);
      }

      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === parseInt(surveyID)
      });

      if(surveyIdx === -1){
        throw Error(`Cannot locate survey with the given survey id ${surveyID}`);
      }

      surveys[surveyIdx].responses.push(response);
      return surveys;
    }
};
