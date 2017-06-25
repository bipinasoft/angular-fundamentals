import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';

@Injectable()
export class EventService {

  constructor() { }

  getMockEventData(): Observable<IEventModel[]> {

    let subject = new Subject<IEventModel[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100);

    return subject;
  }

  getEvent(id: number): IEventModel {
    return EVENTS.find(event => event.id === id);
  }
}
