/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users/:id')
  getHello(
    @Req() req: Request,
    @Param('id') id: string,
    @Query() query: any,
    @Res() res: Response,
  ) {
    const host = req.hostname;
    res.json({
      host,
      id,
      query,
    });
    return this.appService.getHello();
  }
}
