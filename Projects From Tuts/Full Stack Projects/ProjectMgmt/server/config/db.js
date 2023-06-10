const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Trying to connect to database');
    const connect = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
    });
    console.log(
      `MongoDb Connected: ${connect.connection.host}`.cyan.underline.bold,
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
