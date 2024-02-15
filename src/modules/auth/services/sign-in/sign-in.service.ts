import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInInput } from '../../dto/sign-in.input';
import { SignInOutput } from '../../dto/sign-in.output';
import { FindOneUserService } from '../../../user/services/find-one-user/find-one-user.service';

@Injectable()
export class SignInService {
  constructor(
    private findOneUserService: FindOneUserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInInput): Promise<SignInOutput> {
    console.log(data);
    const user = await this.findOneUserService.findOneUser({
      email: data.email,
    });
    console.log(user);
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
