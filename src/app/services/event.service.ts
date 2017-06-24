import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Subject } from 'rxjs/RX';

@Injectable()
export class EventService {

  constructor() { }

  getMockEventData() {
    let subject = new Subject();

    setTimeout(() => {subject.next(EVENTS); subject.complete(); }, 100);

    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}
