import {
    Get,
    Patch,
    Post,
    Put,
    Delete,

    Query,
    Body,
    Controller,

    ConflictException,
    InternalServerErrorException,
    NotFoundException,

} from '@nestjs/common';

import { RoleService } from '../services/role.service';
import { RoleEntity } from 'src/models/entities/role.entity';

@Controller("role")
export class RoleAdminController {
    constructor(
        private readonly roleService: RoleService,
        // private readonly paginationService: PaginationService,
        // private readonly permissionService: PermissionService,
        // private readonly roleEnumService: RoleEnumService
    ) { }


    @Get('list')
    async list(): Promise<any> {
        const roles: RoleEntity[] = await this.roleService.findAll({});
        return roles;
    }

    @Post("user")
    async create(): Promise<RoleEntity> {
        const role = await this.roleService.create({ name: "admin" });
        return role;
    }

    @Put("user/active")
    async block(
        @Query("id") id: string
    ): Promise<RoleEntity> {
        let result = await this.roleService.active(id);
        return result;
    }

    @Put("user/inactive")
    async unblock(
        @Query("id") id: string
    ): Promise<RoleEntity> {
        let result = await this.roleService.inactive(id);
        return result;
    }
}