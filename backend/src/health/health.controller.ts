import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query
} from '@nestjs/common';
import { ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @ApiPropertyOptional({
    name: 'http status code',
    enum: HttpStatus,
    enumName: 'HttpStatusCode'
  })
  @ApiResponseProperty({ enum: HttpStatus })
  @Get()
  getHealth(@Query('status') status?: HttpStatus) {
    if (status) {
      throw new HttpException({ status, error: 'error' }, status);
    }
    return { status: 'OK' };
  }
}
