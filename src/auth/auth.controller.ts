import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
     @UseGuards(AuthGuard('local'))// use the local strategy defined in local.strategy.ts
     @Post('login')
     login(@Req() req: Request){// after validation of local strategy, insert user in request
          return req.user;
     }
}
