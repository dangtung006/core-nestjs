import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '../../../models/const/database.const';

import {
    RoleEntity,
    RoleSchema,
} from '../../../models/entities/role.entity';

import { RoleRepository } from '../../../models/repositories/role.repository';

@Module({
    providers: [RoleRepository],
    exports: [RoleRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: RoleEntity.name,
                    schema: RoleSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class RoleRepositoryModule { }