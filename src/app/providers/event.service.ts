import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';
import { ISessionModel } from '../models/ISessionModel';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {
  eventsUrl: string = 'http://localhost:50829/api/';

  constructor(private http: Http) { }

  getEventData(): Observable<IEventModel[]> {
    return this.http.get(this.eventsUrl + 'events')
      .map((response: Response) => { return <IEventModel[]>response.json(); })
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<IEventModel> {
    return this.http.get(this.eventsUrl + 'events/' + id)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  saveEvent(event: IEventModel): Observable<IEventModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.eventsUrl + 'events/save', JSON.stringify(event), options)
      .map((response: Response) => { return <IEventModel>response.json(); })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  searchSessions(searchTerm: string) {
    return this.http.get(this.eventsUrl + 'sessions/search?search=' + searchTerm)
      .map((response: Response) => { return <ISessionModel>response.json(); })
      .catch(this.handleError);
  }
}
