import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ISignIn, TSignInInput } from './sign-in.interface';
import { FindOneUserService } from '../../../user/services/find-one-user/find-one-user.service';

@Injectable()
export class SignInService implements ISignIn {
  constructor(
    private findOneUserService: FindOneUserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: TSignInInput) {
    const user = await this.findOneUserService.findOneUser({
      email: data.email,
    });
    if (!user) {
      throw new NotFoundException();
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
    delete user.password;
    return {
      accessToken: this.jwtService.sign(user),
      refreshToken: '',
    };
  }
}
