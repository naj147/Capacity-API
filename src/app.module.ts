import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EventModule} from './event/event.module';
import {LocationModule} from './location/location.module';
import config from './config/config keys'

@Module({
    imports: [
        EventModule, LocationModule, MongooseModule.forRoot(config.mangoURI)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
