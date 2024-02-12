import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createHash } from "crypto";
import AppConfig from '../../config/app/configuration';


@Injectable()
export class CryptService {
    
    constructor(
        private readonly jwtService: JwtService
    ) {}

    compareHash(password:string, hash: string): boolean{
        const ciphertext = this.encryptPassword(password);
        return ciphertext === hash;
    }

    encryptPassword(pass: string): string{
        const ciphertext = createHash('sha512').update(pass).digest('hex');
        return ciphertext.toString();
    }

    async jwtEncrypt(user: any): Promise<string>{
        return await this.jwtService.sign(user.toJSON(), {
            secret: AppConfig().jwtSecret,
            expiresIn: AppConfig().jwtExp
        })
    }
}