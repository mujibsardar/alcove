let surveys = [
  {id: 0, title: "Roomate Initial Screening", questions: [
    {type: "text", content: "What is your name"},
    {type: "choice", content: "What is your gender", choices: ["male", "female", "nonbinary"]},
    {type: "date", content: "What is your birthday"}
  ]}]

module.exports = {
    find: function(params) {
      return surveys;
    },
};
