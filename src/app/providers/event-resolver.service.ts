import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event.service';


@Injectable()
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    // local json-server.
    return this.eventService.getEvent(+route.params['id']);
  }
}
