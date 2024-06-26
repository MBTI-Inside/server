import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query
} from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHealth(@Query('error') errorCode?: HttpStatus) {
    if (errorCode) {
      throw new HttpException({ status: errorCode, error: 'error' }, errorCode);
    }
    return { status: 'OK' };
  }
}
