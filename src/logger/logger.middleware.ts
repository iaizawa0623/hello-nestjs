import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const datetime = new Date();
    const clientIpAddress = req.ip;
    const headers = req.headers;
    const url = req.originalUrl;
    const body = req.body;
    console.log({
      datetime,
      clientIpAddress,
      url,
      headers,
      body,
    });
    next();
  }
}
