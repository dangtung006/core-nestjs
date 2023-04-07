import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import configs from "../configs/index.config";
import { DatabaseconnectModule } from './database.module/mongoose/connect.module';
import { DatabaseConnectService } from './database.module/mongoose/servcies/connect.service';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            load: configs,
            isGlobal: true,
            cache: true
        }),

        MongooseModule.forRootAsync({
            connectionName: "PrimaryConnectionDatabase",
            imports: [DatabaseconnectModule],
            inject: [DatabaseConnectService],
            useFactory: (databaseConnectService: DatabaseConnectService) => databaseConnectService.makeOptionConnect()
        })
    ]
})
export class CommonModule { }
