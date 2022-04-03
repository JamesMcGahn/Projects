import { Router, Request, Response, NextFunction } from 'express';
import { get, post, controller, use, bodyValidator } from './decorators/index';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('req was made 1');
  next();
  return;
}
function logger2(req: Request, res: Response, next: NextFunction) {
  console.log('req was made 2');
  next();
  return;
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  @use(logger2)
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
              <label>Email</label>
              <input name="email" />
          </div>
          <div>
              <label>Password</label>
              <input name="password" type="password" />
          </div>
          <button>Submit</button>
        </form>
        `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'test@example.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Please enter a valid email and password');
    }
  }

  @get('/logout')
  logOut(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
