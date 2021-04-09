const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/test_mongo';

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Mongodb is connected to', db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
