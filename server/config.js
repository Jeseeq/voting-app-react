module.exports = {
  db: {
    uri: process.env.MONGO_URI || 'mongodb://' +
        (process.env.DB_ADDR || 'localhost') + '/vote-app',
    options: {
      user: '',
      pass: ''
    }
  }
};
