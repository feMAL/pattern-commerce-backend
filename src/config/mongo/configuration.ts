import { registerAs } from "@nestjs/config"

export default registerAs('mongo', () => ({
    isEnabled: process.env.DB_MONGO_ENABLED === 'true' ? true : false,
    host: process.env.DB_MONGO_HOSTNAME,
    port: process.env.DB_MONGO_PORT,
    name: process.env.DB_MONGO_NAME,
    connection: `mongodb://${process.env.DB_MONGO_HOSTNAME}:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`,
}))