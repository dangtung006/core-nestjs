import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    UserEntity,
    UserSchema,
} from '../entities/user.entity';

import { UserRepository } from '../repositories/use.repository';

@Module({
    providers: [UserRepository],
    exports: [UserRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: UserEntity.name,
                    schema: UserSchema,
                },
            ],
            ""
        ),
    ],
})
export class UserRepositoryModule { }