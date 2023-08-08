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
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';

@Controller()
@UseGuards(RolesGuard, AuthGuard)
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '' })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  getHello() {
    return this.appService.getHello();
  }

  @Get('/exception')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '' })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  getException() {
    throw new HttpException('Bad Request.', HttpStatus.BAD_REQUEST);
  }
}
