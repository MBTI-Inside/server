import { Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { AUTH_SERVICE } from '../service/auth.service';
import { IAuthService } from '../service/auth.service.interface';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService,
    private readonly configService: ConfigService
  ) {}

  @Get('sign-in/google')
  async signInGoogle() {
    const oauth2Client = new google.auth.OAuth2(
      this.configService.get('GOOGLE_CLIENT_ID'),
      this.configService.get('GOOGLE_CLIENT_SECRET'),
      this.configService.get('GOOGLE_REDIRECT_URI')
    );
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['email', 'profile']
    });
    console.log(url);
  }

  @Get('redirect/google')
  async redirectGoogle(@Query('code') code: string) {
    const oauth2Client = new google.auth.OAuth2(
      this.configService.get('GOOGLE_CLIENT_ID'),
      this.configService.get('GOOGLE_CLIENT_SECRET'),
      this.configService.get('GOOGLE_REDIRECT_URI')
    );
    const { tokens, res } = await oauth2Client.getToken(code);
    console.log(tokens, res);
    oauth2Client.setCredentials(tokens);
    const userInfo = await google
      .oauth2('v2')
      .userinfo.get({ auth: oauth2Client });
    console.log(userInfo);
  }
}
