import { Router, Request, Response, NextFunction } from 'express';
import { get, post, controller, use, bodyValidator } from './decorators/index';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('not authorized');
}

@controller('')
class RootController {
  @get('/')
  root(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
            <div>
              <div>
                  You are logged ins
              <div>
              <a href="/auth/logout">Logout</a>
            </div>
            `);
    } else {
      res.send(`
          <div>
            <div>
                You are NOT logged in
            <div>
            <a href="/auth/login">Login</a>
          </div>
          `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('protected');
  }
}
