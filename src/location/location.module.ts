import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { Location, LocationSchema } from './schema/location.schema';
import { LocationRepository } from './location.repository';

@Module({
  imports: [MongooseModule.forFeature(
          [{
                  name: Location.name,
                  schema: LocationSchema
              }]
      )],
  providers: [LocationService, LocationRepository],
  controllers: [LocationController]
})
export class LocationModule {}
