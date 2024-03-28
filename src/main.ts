import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RmqOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from './modules/utils/services/config/config.service';
import { LoggerService } from './modules/logger/services/loggger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new LoggerService() });
  const configService = new ConfigService();

  app.connectMicroservice<RmqOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.getConfig().RABBIT_URL],
      queue: configService.getConfig().RABBIT_QUEUE_OFFER,
      queueOptions: { durable: true, auto_delete: false },
      noAck: false,
    },
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
