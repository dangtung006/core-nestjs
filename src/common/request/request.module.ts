import {
    HttpStatus,
    Module,
    UnprocessableEntityException,
    ValidationError,
    ValidationPipe,
} from '@nestjs/common';

import {
    ConfigModule,
    ConfigService
} from '@nestjs/config';

import { RequestMiddlewareModule } from "./middlewares/request.middleware.module"
@Module({
    controllers: [],
    providers: [
    ],

    imports: [
        RequestMiddlewareModule,
    ],
})
export class RequestModule { }