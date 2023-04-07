import { Module } from '@nestjs/common';
import { RouterModule } from 'src/router/index.module';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [
        CommonModule,
        RouterModule.forRoot(),
    ],
})
export class AppModule { }
