import { Module } from '@nestjs/common';

import { RoleAdminController } from '../../modules/roles/controllers/role.admin.controller';
import { RoleModule } from 'src/modules/roles/role.module';

@Module({
    controllers: [
        RoleAdminController
    ],
    imports: [
        RoleModule
    ]
})
export class AdminRoutesModule { }