import { registerAs } from '@nestjs/config';

export default registerAs(
    'database',
    (): Record<string, any> => ({
        host: process.env?.DATABASE_HOST ?? 'mongodb://127.0.0.1:27017',
        name: process.env?.DATABASE_NAME ?? 'user_management',
        user: process.env?.DATABASE_USER,
        password: process?.env.DATABASE_PASSWORD,
        debug: process.env.DATABASE_DEBUG === 'true',
        options: process.env?.DATABASE_OPTIONS,
    })
);