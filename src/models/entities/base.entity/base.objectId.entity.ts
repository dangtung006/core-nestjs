import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {
    DATABASE_CREATED_AT_FIELD_NAME,
    DATABASE_DELETED_AT_FIELD_NAME,
    DATABASE_UPDATED_AT_FIELD_NAME,
    DatabaseDefaultObjectId
} from '../../const/database.const';

export abstract class DatabaseMongoObjectIdEntityAbstract {
    @Prop({
        type: Types.ObjectId,
        default: DatabaseDefaultObjectId,
    })
    _id: Types.ObjectId;

    @Prop({
        required: false,
        index: true,
        type: Date,
    })
    [DATABASE_DELETED_AT_FIELD_NAME]?: Date;

    @Prop({
        required: false,
        index: true,
        type: Date,
    })
    [DATABASE_CREATED_AT_FIELD_NAME]?: Date;

    @Prop({
        required: false,
        index: true,
        type: Date,
    })
    [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;
}
