import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ISignUp, TSignUpInput } from './sign-up.interface';
import { CreateUserService } from '../../../user/services/create-user/create-user.service';
import { SignUpOutput } from '../../dto/sign-up.output';

@Injectable()
export class SignUpService implements ISignUp {
  constructor(
    private createUserService: CreateUserService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: TSignUpInput): Promise<SignUpOutput> {
    const user = await this.createUserService.create({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    });
    delete user.password;
    return { accessToken: this.jwtService.sign(user), refreshToken: '' };
  }
}
