import {Module} from '@nestjs/common';
import {EventService} from './event.service';
import {EventController} from './event.controller';
import {EventSchema,Event} from './schemas/event.schema';
import {MongooseModule} from "@nestjs/mongoose";
import { EventRepository } from './event.repository';

@Module({
    imports: [MongooseModule.forFeature(
            [{
                    name: Event.name,
                    schema: EventSchema
                }]
        )],
    providers: [EventService, EventRepository],
    controllers: [EventController]
})
export class EventModule {}
