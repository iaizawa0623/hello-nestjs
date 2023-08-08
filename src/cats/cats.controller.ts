/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpStatus,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { JoiValidationPipe } from 'src/joi-validation-pipe/joi-validation-pipe.pipe';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // @Roles('admin')
  @UseGuards(RolesGuard)
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '' })
  @ApiResponse({
    status: 201,
    description: 'OK',
  })
  @ApiBody({
    schema: {
      example: {
        name: 'Tom',
        age: 17,
        breed: 'hoge',
      },
    },
  })
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '' })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 0,
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
