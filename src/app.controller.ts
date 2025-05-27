import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
