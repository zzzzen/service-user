import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserService } from '../../../user/services/create-user/create-user.service';
import { SignUpInput } from '../../dto/sign-up.input';
import { SignUpOutput } from '../../dto/sign-up.output';

@Injectable()
export class SignUpService {
  constructor(
    private createUserService: CreateUserService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: SignUpInput): Promise<SignUpOutput> {
    const user = await this.createUserService.create({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    });
    delete user.password;
    return { accessToken: this.jwtService.sign(user), refreshToken: '' };
  }
}
