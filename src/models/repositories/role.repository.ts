import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from './base/base.uuid.repository';
import { DatabaseModel } from './../decorators/database.decorator';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleRepository extends DatabaseMongoUUIDRepositoryAbstract<RoleEntity> {
    constructor(
        @DatabaseModel(RoleEntity.name) private readonly roleModel: Model<RoleEntity>
    ) {
        super(
            roleModel
        );
    }
}
