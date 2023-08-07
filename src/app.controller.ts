/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';

@Controller()
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/exception')
  getException() {
    throw new HttpException('Bad Request.', HttpStatus.BAD_REQUEST);
  }
}
