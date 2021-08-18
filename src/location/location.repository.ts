import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {FilterQuery, Model} from "mongoose";
import { Repostiory } from "src/core/core.repository";
import { Location , LocationDocument} from "./schema/location.schema";


@Injectable()
export class LocationRepository implements Repostiory<Location,LocationDocument>{

    constructor(@InjectModel(Location.name)private locationModel : Model < LocationDocument >) {}

    async findOne(filterQuery: FilterQuery<LocationDocument>): Promise<Location> {
        return this.locationModel.findOne(filterQuery)
    }
    
    async find(filterQuery: FilterQuery<LocationDocument>): Promise<Location[]> {
        return this.locationModel.find(filterQuery)
    }
    async create(object: Location): Promise<Location> {
        const newObject = new this.locationModel(object)
        return newObject.save()
    }
    async findOneAndUpdate(filterQuery: FilterQuery<LocationDocument>, object: Partial<Location>): Promise<LocationDocument> {
        return this.locationModel.findOneAndUpdate(filterQuery,object)
    }
}