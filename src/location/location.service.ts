import {Injectable} from "@nestjs/common";
import {UpdateLocationDto} from "./dto/update-location";
import {v4 as uuidv4} from 'uuid';
import {Location} from "./schema/location.schema";
import {LocationRepository} from "./location.repository";

@Injectable()
export class LocationService {
    constructor(private readonly locationRepository : LocationRepository) {}

    async getLocationById(locationId : string): Promise < Location > {
        return this.locationRepository.findOne({locationId})
    }

    async getLocations(): Promise < Location[] > {
        return this.locationRepository.find({});
    }

    async createLocation(name : string, lat : number, long : number): Promise < Location > {
        return this.locationRepository.create(
            {locationId: uuidv4(), lat: lat, long: long, name: name}
        )
    }

    async updateLocation(locationId : string, locationUpdates : UpdateLocationDto): Promise < Location > {
        return this.locationRepository.findOneAndUpdate({
            locationId
        }, locationUpdates);
    }
}
