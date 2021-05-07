module.exports = {
    generateID: () => {
      return Math.floor(Date.now() / Math.floor(Math.random() * 10000));
    },
    addIDs: (questions) => {
      return questions.map(question => {
        return {id: Math.floor(Date.now() / Math.floor(Math.random() * 10000)), ...question}
      })
    }
}
