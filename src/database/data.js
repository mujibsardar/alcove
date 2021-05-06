module.exports = {
    Surveys: [
      {
        id: 0,
        title: "Roommate Initial Screening",
        questions: [
          {id: 0,type: "text", content: "What is your name"},
          {id: 1,type: "choice", content: "What is your gender", choices: ["male", "female", "nonbinary"]},
          {id: 2,type: "date", content: "What is your birthday"}
        ],
        responses: [{id: 0, question_1: "Avan Sardar", question_2: "male", question_3: new Date(1983, 07, 29)}]
    }
  ]
}
