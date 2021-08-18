import { EventService } from './event.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event';
import { UpdateEventDto } from './dto/update-event';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get(':eventId')
    async getEvent(@Param('eventId') eventId: string): Promise<Event> {
      return this.eventService.getEventById(eventId);
    }
  
    @Get()
    async getEvents(): Promise<Event[]> {
        return this.eventService.getEvents();
    }
  
    @Post()
    async createLocation(@Body() createEventDto: CreateEventDto): Promise<Event> {
        return this.eventService.createEvent(createEventDto.eventName,createEventDto.numberOfPeople,createEventDto.maxCapacity)
    }
  
    @Patch(':eventId')
    async updateLocation(@Param('eventId') eventId: string, @Body() updateEventDto: UpdateEventDto): Promise<Event> {
        return this.eventService.updateEvent(eventId, updateEventDto);
    }
}
