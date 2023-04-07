import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RoutesModule } from './modules/user.module';


@Module({})
export class RouterModule {
    static forRoot(): DynamicModule {

        const imports: (
            | DynamicModule
            | Type<any>
            | Promise<DynamicModule>
            | ForwardReference<any>
        )[] = [];

        imports.push(
            RoutesModule,
            NestJsRouterModule.register([
                {
                    path: '/',
                    module: RoutesModule,
                },
                {
                    path: '/admin',
                    module: null,
                },
            ])
        );

        return {
            module: RouterModule,
            providers: [],
            exports: [],
            controllers: [],
            imports: imports
        };
    }
}