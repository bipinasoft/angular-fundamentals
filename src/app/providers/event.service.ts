import { Injectable } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventService {
  eventsUrl: string = 'http://localhost:3000/events/';

  constructor(private http: Http) { }

  getMockEventData(): Observable<IEventModel[]> {
    let subject = new Subject<IEventModel[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100);
    return subject;
  }

  getEvent(id: number): IEventModel {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id);
    EVENTS[index] = event;
  }

  /* to be used later when hooking up to json-server
  getServiceEventData(): Observable<IEventModel[]> {
    return this.http.get(this.eventsUrl)
      .map((response: Response) => { return <IEventModel[]>response.json(); })
      .catch(this.handleError);
  }

  getServiceEvent(id: number): Observable<IEventModel> {
    return this.http.get(this.eventsUrl + id)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  // Add to details.component.ts file:
  this.eventService.getServiceEvent(+this.route.snapshot.params['id'])
    .subscribe((event: IEventModel) => { this.event = event; });
  */
}
