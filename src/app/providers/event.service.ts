import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventService {
  eventsUrl: string = 'http://localhost:3000/events';

  constructor(private http: Http) { }

  getMockEventData(): Observable<IEventModel[]> {
    let subject = new Subject<IEventModel[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100);
    return subject;
  }

  getServiceEventData(): Observable<IEventModel[]> {
    return this.http.get(this.eventsUrl)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  getEvent(id: number): IEventModel {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
