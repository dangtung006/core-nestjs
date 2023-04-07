import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from '../entities/base.entity/base.uuid.entity';
import { DatabaseEntity } from '../decorators/database.decorator';

export const RoleDatabaseName = 'roles';

@DatabaseEntity({ collection: RoleDatabaseName })
export class RoleEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: true, index: true, unique: true, lowercase: true, trim: true, maxlength: 100, type: String,
    })
    name: string;

    @Prop({
        required: true, default: true, index: true, type: Boolean,
    })
    isActive: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(RoleEntity);

RoleSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
    this.name = this.name.toLowerCase();

    next();
});
