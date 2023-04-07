import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RoutesModule } from './modules/user.module';
import { AdminRoutesModule } from './modules/admin.module';


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
            AdminRoutesModule,
            NestJsRouterModule.register([
                {
                    path: '/',
                    module: RoutesModule,
                },
                {
                    path: '/admin',
                    module: AdminRoutesModule,
                },
            ])
        );

        return {
            module: RouterModule,
            imports: imports
        };
    }
}