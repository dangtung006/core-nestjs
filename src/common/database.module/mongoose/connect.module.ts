import { Module } from '@nestjs/common';
import { DatabaseConnectService } from "../mongoose/servcies/connect.service"

@Module({
    providers: [DatabaseConnectService],
    exports: [DatabaseConnectService],
})
export class DatabaseconnectModule { }