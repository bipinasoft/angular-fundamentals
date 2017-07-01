import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class ListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    // Mock Data resolver
    //return this.eventService.getMockEventData().map(events => events);

    // Firebase service
    return this.eventService.getServiceEventData();
  }
}
