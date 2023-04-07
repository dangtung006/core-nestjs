import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import { ConfigService } from '@nestjs/config';
// import { ENUM_APP_ENVIRONMENT } from 'src/app/constants/app.enum.constant';

@Injectable()
export class RequestCorsMiddleware implements NestMiddleware {
    // private readonly appEnv: ENUM_APP_ENVIRONMENT;
    // private readonly allowOrigin: string | boolean | string[];
    // private readonly allowMethod: string[];
    // private readonly allowHeader: string[];

    constructor(private readonly configService: ConfigService) {
        // this.appEnv = this.configService.get<ENUM_APP_ENVIRONMENT>('app.env');
        // this.allowOrigin = this.configService.get<string | boolean | string[]>(
        //     'request.cors.allowOrigin'
        // );
        // this.allowMethod = this.configService.get<string[]>(
        //     'request.cors.allowMethod'
        // );
        // this.allowHeader = this.configService.get<string[]>(
        //     'request.cors.allowHeader'
        // );
    }

    use(req: Request, res: Response, next: NextFunction): void {
        // const allowOrigin =
        //     this.appEnv === ENUM_APP_ENVIRONMENT.PRODUCTION
        //         ? this.allowOrigin
        //         : 'http://localhost:3100';

        // const corsOptions: CorsOptions = {
        //     origin: allowOrigin,
        //     methods: this.allowMethod,
        //     allowedHeaders: this.allowHeader,
        //     preflightContinue: false,
        //     credentials: true,
        //     optionsSuccessStatus: HttpStatus.NO_CONTENT,
        // };

        cors({
            origin: "*",
            methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
            allowedHeaders: [
                'Accept',
                'Accept-Language',
                'Content-Language',
                'Content-Type',
                'Origin',
                'Authorization',
                'Access-Control-Request-Method',
                'Access-Control-Request-Headers',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Credentials',
                'Access-Control-Expose-Headers',
                'Access-Control-Max-Age',
                'Referer',
                'Host',
                'X-Requested-With',
                'x-custom-lang',
                'x-timestamp',
                'x-api-key',
                'x-timezone',
                'x-request-id',
                'x-version',
                'x-repo-version',
                'x-permission-token',
                'X-Response-Time',
                'user-agent',
            ],
            preflightContinue: false,
            credentials: true,
        })(req, res, next);
    }
}
