import { Injectable, EventEmitter } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';
import { ISessionModel } from '../models/ISessionModel';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {
  eventsUrl: string = 'http://localhost:3000/events/';

  constructor(private http: Http) { }

  getEventData(): Observable<IEventModel[]> {
    return this.http.get(this.eventsUrl)
      .map((response: Response) => { return <IEventModel[]>response.json(); })
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<IEventModel> {
    return this.http.get(this.eventsUrl + id)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  saveEvent(event): Observable<IEventModel> {
    let headers = new Headers({ 'Content-Type': 'Application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventsUrl, JSON.stringify(event), options)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  searchSessions(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: ISessionModel[] = [];

    EVENTS.forEach(event => {
      var matchingSessions = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session: any) => {
        session.eventId = event.id;
        return session;
      })
      results = results.concat(matchingSessions);
    })

    var emitter = new EventEmitter(true);
    setTimeout(() => { emitter.emit(results); }, 100);
    return emitter;
  }
}
