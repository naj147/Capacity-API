import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Location } from './schema/location.schema';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location';
import { UpdateLocationDto } from './dto/update-location';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':locationId')
  async getUser(@Param('locationId') locationId: string): Promise<Location> {
    return this.locationService.getLocationById(locationId);
  }

  @Get()
  async getLocations(): Promise<Location[]> {
      return this.locationService.getLocations();
  }

  @Post()
  async createLocation(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
      return this.locationService.createLocation(createLocationDto.name,createLocationDto.lat,createLocationDto.long)
  }

  @Patch(':locationId')
  async updateLocation(@Param('locationId') locationId: string, @Body() updateLocationDto: UpdateLocationDto): Promise<Location> {
      return this.locationService.updateLocation(locationId, updateLocationDto);
  }
}