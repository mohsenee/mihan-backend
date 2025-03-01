import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description for our project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI will be available at /api

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization'
  });

  await app.listen(8000);
}
bootstrap();
