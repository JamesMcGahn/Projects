import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
const PORT = 3057;

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ahehwewd'] }));
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`app firing on PORT: ${PORT}`);
});
