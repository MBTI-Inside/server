import { AUTH_PLATFORM } from 'src/auth/types/auth.types';

export class SiginInCommand {
  constructor(
    readonly username: string,
    readonly password: string,
    readonly platform: AUTH_PLATFORM
  ) {}
}
