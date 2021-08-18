import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import {Location} from "src/location/schema/location.schema";


export type EventDocument = Event & mongoose.Document;

@Schema()
export class Event {
    @Prop()
    eventId : string;

    @Prop()
    eventName : string;
    
    @Prop({default: 0})
    nbrPpl : number;

    @Prop({default: -1})
    maxCapacity : number;

    @Prop()
    updatedLast : Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Location'})
    location?: Location;

}

export const EventSchema = SchemaFactory.createForClass(Event);
