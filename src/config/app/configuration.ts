import { registerAs } from "@nestjs/config"

export default registerAs('app', () => ({
    name: process.env.APP_NAME,
    host: process.env.APP_HOST,
    port: parseInt(process.env.APP_PORT) || 3000,
    jwtSecret: process.env.JWT_SECRET,
    jwtExp: process.env.JWT_KEY_EXP,
    environment: process.env.APP_ENV === 'production',
    context: process.env.APP_CONTEXT,
    origins: process.env.APP_ORIGINS,
    allowedHeaders: process.env.APP_ALLOWED_HEADERS,
    allowedMethods: process.env.APP_ALLOWED_METHODS,
    corsEnabled: process.env.APP_CORS_ENABLED,
    swaggerEnabled: process.env.APP_SWAGGER_ENABLED,
    swaggerPath: process.env.APP_SWAGGER_PATH
}))