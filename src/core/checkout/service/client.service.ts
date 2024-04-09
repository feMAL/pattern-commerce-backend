import { Inject, Injectable } from "@nestjs/common";
import { ClientRepository } from "../repositories/client.repository";
import { ConfigType } from "@nestjs/config";
import config from "../../../config/app/configuration";
import { Client } from "../models/client.model";
import { PaymentClientDTO } from "../dto/payment.dto";
import { ErrorManager } from "../../../common/services/error.manager";

@Injectable()
export class ClientService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
        private clientRepository: ClientRepository
    ){}


    async getClientByMail(email: string): Promise<Client>{
        return await this.clientRepository.findOne({email})
    }

    async createClient(client: PaymentClientDTO): Promise<Client> {

        try{

            console.log(client)
            const clientExist = await this.getClientByMail(client.email);
            if(clientExist){
                throw new ErrorManager({type: "CONFLICT", message: "This client is already register", context: ClientService.name})
            }
            const { name, surname,email, address } = client;
            const clientToSave: Partial<Client> = { name, surname, email, address };

            return await this.clientRepository.create(clientToSave);
        }catch(err){
            console.log(err)
            ErrorManager.dispatchError(err.message?err.message: err ); 
        }
   }

}