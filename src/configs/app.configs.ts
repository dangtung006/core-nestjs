import { registerAs } from '@nestjs/config';

export default registerAs(
    'app',
    (): Record<string, any> => ({
        name: process.env.APP_NAME ?? 'core',
        env: process.env.APP_ENV ?? 'development',


        globalPrefix: '/api',
        http: {
            enable: process.env.HTTP_ENABLE === 'true' ?? false,
            host: process.env.HTTP_HOST ?? 'localhost',
            port: process.env.HTTP_PORT
                ? Number.parseInt(process.env.HTTP_PORT)
                : 3000,
        },

        jobEnable: process.env.JOB_ENABLE === 'true' ?? false,
    })
);