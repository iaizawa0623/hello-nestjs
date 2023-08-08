/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

/**
 * Recording access logs
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const datetime = new Date().toISOString();
    const clientIpAddress = req.ip;
    const headers = req.headers;
    const url = req.originalUrl;
    const body = req.body;
    // Logger.log({
    //   datetime,
    //   clientIpAddress,
    //   url,
    //   headers,
    //   body,
    // });
    next();
  }
}
