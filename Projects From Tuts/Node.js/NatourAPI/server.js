const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');
dotenv.config({ path: './.env' });

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
