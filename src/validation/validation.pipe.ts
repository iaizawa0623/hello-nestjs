import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('ValidationPipe.type:', metadata.type);
    console.log('ValidationPipe.value:', value);
    return value;
  }
}
