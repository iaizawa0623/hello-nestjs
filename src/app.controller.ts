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
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { RolesGuard } from './roles/roles.guard';
import { AuthGuard } from './auth/auth.guard';

@Controller()
@UseGuards(RolesGuard, AuthGuard)
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
