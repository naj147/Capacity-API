import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type LocationDocument = Location & mongoose.Document

@Schema()
export class Location {
    @Prop()
    locationId : string;

    @Prop({ required: false , default : ""})
    address? : string;

    @Prop()
    name : string;

    @Prop({ required: false , default : ""})
    desc? : string;

    @Prop()
    lat : number;

    @Prop()
    long : number;

    @Prop({ required: false , default : ""})
    logoUrl? : string;

    @Prop({ required: false , default : []})
    images? : [string];
}

export const LocationSchema = SchemaFactory.createForClass(Location);
