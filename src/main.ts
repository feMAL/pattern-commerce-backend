import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const appConfig: AppConfigService = app.get<ConfigService>(ConfigService)['internalConfig']['app'];
//  const mongoConfig: AppConfigService = app.get<ConfigService>(ConfigService)['internalConfig']['mongo'];

  const port = parseInt(appConfig.port);

  app.setGlobalPrefix(`${appConfig.context}`);

  app.use(helmet())

  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('class-transformer'),
      whitelist: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  if (appConfig.corsEnabled) {
    app.enableCors({
      origin: appConfig.allowedOrigins,
      allowedHeaders: `${appConfig.allowedHeaders}`,
      methods: `${appConfig.allowedMethods}`,
    });
  }

  if(appConfig.swaggerEnabled){
    const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Paz Patterns E-commerce')
    .setDescription('Backend for sample e-commerce')
    .setVersion('0.0.1')
    .addTag('seed-v.0.0.1')
    .build();
  
    const document = SwaggerModule.createDocument(app, config,{
      ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup(`${appConfig.context}/${appConfig.swaggerPath}`, app, document);  
  }

  await app.listen(port);
}
bootstrap();
