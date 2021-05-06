const utils = require('../utils');

module.exports = {
    Surveys: [
      {
        id: utils.generateID(),
        title: "Roommate Initial Screening",
        questions: [
          {id: utils.generateID(), type: "text", content: "What is your name"},
          {id: utils.generateID(), type: "choice", content: "What is your gender", choices: ["male", "female", "nonbinary"]},
          {id: utils.generateID(), type: "date", content: "When is your birthdate"}
        ],
        responses: [{id: utils.generateID(), question_1: "Avan Sardar", question_2: "male", question_3: new Date(1983, 07, 29)}]
    }
  ]
}
