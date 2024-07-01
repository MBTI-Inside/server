import { SiginInCommand } from './command/sigin-in.command';

export interface IAuthService {
  signIn(command: SiginInCommand);
}
