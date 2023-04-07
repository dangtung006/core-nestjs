import { Types } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';

export const DATABASE_CONNECTION_NAME = 'PrimaryConnectionDatabase';

export const DATABASE_DELETED_AT_FIELD_NAME = 'deletedAt';
export const DATABASE_UPDATED_AT_FIELD_NAME = 'updatedAt';
export const DATABASE_CREATED_AT_FIELD_NAME = 'createdAt';



export const DatabaseDefaultUUID = uuidV4;
export const DatabaseDefaultObjectId = () => new Types.ObjectId();


