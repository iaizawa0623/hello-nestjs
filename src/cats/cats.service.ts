import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    if (id in this.cats) {
      return this.cats[id];
    }
    throw new HttpException('Not Found.', HttpStatus.NOT_FOUND);
  }
}
