module.exports = {
    generateID: () => {
      return Math.floor(Date.now() / Math.floor(Math.random() * 10000));
    }
}
