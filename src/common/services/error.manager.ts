import { HttpException, HttpStatus, Logger } from "@nestjs/common";

export class ErrorManager extends Error {
    constructor({ type, message, context = 'unknown' }: { type: keyof typeof HttpStatus, message: string, context?: string}) {
        super(`${type} :: ${message} :: ${context}`);
    }

    static dispatchError(message: string){
        let [status, text, context] = message.split(" :: ");
        if(!text && !context){
            Logger.error(message);
            text = message            
        }else{
            Logger.error(text, context);
        }
        if(status){
            throw new HttpException(text,HttpStatus[status]);
        }else {
            throw new HttpException(text,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}