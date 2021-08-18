import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {FilterQuery, Model} from "mongoose";
import {Event, EventDocument} from "./schemas/event.schema";

@Injectable()
export class EventRepository {
    constructor(@InjectModel(Event.name)private eventModel : Model < EventDocument >) {}

    async findOne(eventFilterQuery: FilterQuery<EventDocument>): Promise<Event>{
        return this.eventModel.findOne(eventFilterQuery)
    }

    async find(eventFilterQuery: FilterQuery<EventDocument>): Promise<Event[]>{
        return this.eventModel.find(eventFilterQuery)
    }

    async create(event: Event):Promise<Event>{
        const newEvent = new this.eventModel(event)
        return newEvent.save()
    }

    async findOneAndUpdate(eventFilterQuery: FilterQuery<EventDocument>, event: Partial<Event>): Promise<Event>{
        return this.eventModel.findOneAndUpdate(eventFilterQuery,event);
    }
}
