const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = require('./app');

// start server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`app firing on ${port}`);
});
