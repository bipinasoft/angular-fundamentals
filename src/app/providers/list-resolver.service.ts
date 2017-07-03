import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class ListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    // local json-server.
    return this.eventService.getEventData();
  }
}
