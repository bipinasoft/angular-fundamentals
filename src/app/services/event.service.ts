import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEvent } from '../models/IEvent';

@Injectable()
export class EventService {

  constructor() { }

  getMockEventData(): Observable<IEvent[]> {

    let subject = new Subject<IEvent[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100);

    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }
}
