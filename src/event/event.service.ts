import {Injectable} from '@nestjs/common';
import {EventRepository} from './event.repository';
import {v4 as uuidv4} from 'uuid';
import {Event} from './schemas/event.schema';
import {UpdateEventDto} from './dto/update-event';
@Injectable()
export class EventService {
    constructor(private readonly eventRepository : EventRepository) {}

    async getEventById(eventId : string): Promise < Event > {
        return this.eventRepository.findOne({eventId})
    }

    async getEvents(): Promise < Event[] > {
        return this.eventRepository.find({});
    }

    async createEvent(name : string, numberOfPeople : number, maxCapacity : number): Promise < Event > {
        return this.eventRepository.create(
            {
                eventId: uuidv4(),
                eventName:name,
                nbrPpl: numberOfPeople,
                maxCapacity: maxCapacity,
                updatedLast: new Date(Date.now())
            }
        )
    }

    async updateEvent(locationId : string, eventUpdates : UpdateEventDto): Promise < Event > {
        return this.eventRepository.findOneAndUpdate({
            locationId
        }, eventUpdates);
    }

}
