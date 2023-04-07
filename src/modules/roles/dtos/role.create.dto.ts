import { Type } from 'class-transformer';

import {
    IsString,
    IsNotEmpty,
    MaxLength,
    MinLength,
    IsEnum,
    IsArray,
    IsUUID,
} from 'class-validator';


export class RoleCreateDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @Type(() => String)
    readonly name: string;

}
