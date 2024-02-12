import { registerAs } from "@nestjs/config"

export default registerAs('mongo', () => ({
    isEnabled: process.env.DB_MONGO_ENABLED === 'true' ? true : false,
    host: process.env.DB_MONGO_HOSTNAME,
    port: process.env.DB_MONGO_PORT,
    name: process.env.DB_MONGO_DB_NAME,
    connection: `${process.env.DB_MONGO_PROTOCOL}://${process.env.DB_MONGO_USER ? process.env.DB_MONGO_USER + ":" + process.env.DB_MONGO_PASS + "@" : "" }${process.env.DB_MONGO_HOSTNAME}${process.env.DB_MONGO_PORT ? ":"+ process.env.DB_MONGO_PORT: ""}/${process.env.DB_MONGO_DB_NAME}?retryWrites=true&w=majority`,
}))