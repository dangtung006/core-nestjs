import { Module } from '@nestjs/common';
import { RoleRepositoryModule } from './repository/role.repository.module';
import { RoleService } from './services/role.service';

@Module({
    providers: [RoleService],
    exports: [RoleService],
    imports: [RoleRepositoryModule],
})
export class RoleModule { }
