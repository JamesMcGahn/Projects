import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ahehwewd'] }));
app.use(router);

app.listen(PORT, () => {
  console.log(`app firing on PORT: ${PORT}`);
});
