import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';

@Injectable()
export class EventService {

  constructor() { }

  getMockEventData() {
    return EVENTS;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}
