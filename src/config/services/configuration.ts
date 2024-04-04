import { registerAs } from "@nestjs/config"

export default registerAs('services', () => ({
    acvUrl: process.env.ACCESS_VALIDATION_URL,
}))