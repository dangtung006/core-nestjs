import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RequestCorsMiddleware } from './cors.middleware';


@Module({})
export class RequestMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(RequestCorsMiddleware)
            .forRoutes('*');
    }
}
