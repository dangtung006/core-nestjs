import {
    Get,
    Patch,
    Post,
    Put,
    Delete,

    Body,
    Controller,

    ConflictException,
    InternalServerErrorException,
    NotFoundException,

} from '@nestjs/common';

import { RoleService } from '../services/role.service';

@Controller("role")
export class RoleAdminController {
    constructor(
        // private readonly paginationService: PaginationService,
        // private readonly permissionService: PermissionService,
        private readonly roleService: RoleService,
        // private readonly roleEnumService: RoleEnumService
    ) { }


    @Get('list')
    async list(): Promise<any> {
        console.log("aaaaaaaaa");
        return "aaaaaa"
        // const roles: RoleEntity[] = await this.roleService.findAll({});
    }
}