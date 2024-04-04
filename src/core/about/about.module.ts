import { Module } from "@nestjs/common";
import { AboutController } from "./controllers/about.controller";
import { AboutService } from "./services/about.service";
import { MongooseModule } from "@nestjs/mongoose";
import { About, AboutSchema } from "./models/about.model";
import { AboutRepository } from "./repositories/about.repository";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }]),
    ],
    controllers: [ AboutController ],
    providers: [
        AboutService,
        AboutRepository
     ]
})
export class AboutModule {}