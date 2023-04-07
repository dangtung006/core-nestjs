import { NestFactory } from '@nestjs/core';
import { Logger, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const host: string = configService.get<string>('app.http.host');
    const port: number = configService.get<number>('app.http.port');
    const env: string = configService.get<string>('app.env');
    const databaseUri: string = configService.get<string>('database.host');

    const logger = new Logger();
    process.env.NODE_ENV = env;

    // Listen
    await app.listen(port, host);
    logger.log(`Database uri ${databaseUri}`, 'NestApplication');

    logger.log(
        `Http Server running on ${await app.getUrl()}`,
        'NestApplication'
    );
}
bootstrap();
