import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from "../configs/index.config";
@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            load: configs,
            isGlobal: true,
            cache: true
        })
    ]
})
export class CommonModule { }
