import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { TestDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @TypedRoute.Post()
  create(@TypedBody() dto: TestDto) {
    return 'test';
  }
}
