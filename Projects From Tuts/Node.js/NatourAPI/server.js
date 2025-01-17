const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './.env' });

connectDB();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
