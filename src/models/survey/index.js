let idCount = 0;

let surveys = [
  {
    id: idCount,
    title: "Roommate Initial Screening",
    questions: [
      {id: 0,type: "text", content: "What is your name"},
      {id: 1,type: "choice", content: "What is your gender", choices: ["male", "female", "nonbinary"]},
      {id: 2,type: "date", content: "What is your birthday"}
    ],
    responses: [{id: 0, question_1: "Avan Sardar", question_2: "male", question_3: new Date(1983, 07, 29)}]
}]

const generateID = () => {
  return Math.floor(Date.now() / Math.floor(Math.random() * 10000));
}

module.exports = {
    find: function(params) {
      if(params && params.id){
        return surveys.filter(survey => {return survey.id === parseInt(params.id)})
      }
      if(params && params.title){
        return surveys.filter(survey => {return survey.title.toLowerCase() === params.title.toLowerCase()})
      }
      return surveys;
    },
    create: function(params) {
      // id, title, questions (id, type, content, choices)
      let newSurvey = {id: ++idCount, title: params.title, questions: params.questions, responses: []}
      surveys.push(newSurvey);
      return surveys;
    },
    removeQuestion: function(params) {
      // survey id, questions id
      const surveyID = parseInt(params.surveyid);
      const questionID = parseInt(params.questionid);
      surveys.forEach((survey, index) => {
        if(survey.id === surveyID) {
            let foundQuestionIndex = survey.questions.findIndex(question => question.id === questionID);
            survey.questions.splice(foundQuestionIndex, 1);
            surveys[index] = survey;
        }
    });
      return surveys;
    },
    addQuestion: function(params) {

      // survey id, id: 0,type: "text", content: "What is your name"
      const surveyID = parseInt(params.surveyid);
      const newQuestionID = generateID();
      const newQuestion = {id: newQuestionID, ...params.question};

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

      // survey id, [ids]
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
    },
    addResponse: function(surveyID, params) {
      const responseID = generateID();
      let response ={id: responseID, ...params.response};
      const surveyIdx = surveys.findIndex(survey => {
        return survey.id === parseInt(surveyID)
      });
      surveys[surveyIdx].responses.push(response);
      return surveys;
    }
};
