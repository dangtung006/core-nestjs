import { Module } from '@nestjs/common';

import { UserController } from '../../modules/users/controllers/user.public';

@Module({
    controllers: [
        UserController
    ],
    imports: [
    ]
})
export class RoutesModule { }