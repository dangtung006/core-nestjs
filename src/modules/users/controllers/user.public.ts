import {
    BadRequestException,
    Body,
    Controller,
    ForbiddenException,
    Get,
    HttpCode,
    HttpStatus,
    InternalServerErrorException,
    NotFoundException,
    Patch,
    Post,
    UploadedFile,
    Req,
} from '@nestjs/common';

@Controller({ path: '/user' })

export class UserController {
    constructor(

    ) { }

    @Get("/list")
    getUser() {

    }
}