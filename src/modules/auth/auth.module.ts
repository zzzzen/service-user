import { Global, Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { SignUpService } from './services/sign-up/sign-up.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthJwtStrategy } from './auth-jwt.strategy';
import { SignInService } from './services/sign-in/sign-in.service';

@Global()
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      secret: 'asdsd',
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthResolver, AuthJwtStrategy, SignUpService, SignInService],
  exports: [SignUpService, SignInService],
})
export class AuthModule {}
