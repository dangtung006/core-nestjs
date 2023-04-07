import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from './base/base.uuid.repository';
import { DatabaseModel } from './../decorators/database.decorator';
import { RoleEntity } from '../entities/role.entity';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository extends DatabaseMongoUUIDRepositoryAbstract<UserEntity> {
    constructor(
        @DatabaseModel(UserEntity.name) private readonly userModel: Model<UserEntity>
    ) {
        super(userModel, {
            path: 'role',
            localField: 'role',
            foreignField: '_id',
            model: RoleEntity.name,
        });
    }
}