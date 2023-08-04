import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    console.log('url:', req.url);
    console.log('query:', req.query);
    console.log('params:', req.params);
    console.log('body:', req.body);
    next();
  }
}
