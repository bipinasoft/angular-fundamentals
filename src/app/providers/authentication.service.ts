import { Injectable } from '@angular/core';
import { IUserModel } from '../models/IUserModel';
import { Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthenticationService {
  currentUser: IUserModel;
  eventsUrl: string = 'http://localhost:50829/api/';

  constructor(private http: Http) { }

  authenticateUser(userName: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let loginInfo = { UserName: userName, Password: password };

    return this.http.post(this.eventsUrl + 'userauthentications/login', JSON.stringify(loginInfo), options)
      .do(resp => {
        if (resp) {
          this.currentUser = <IUserModel>resp.json();
        }
      }).catch(error => {
        return Observable.of(false);
      });
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    return this.http.get(this.eventsUrl + 'userauthentications/status')
      .map((response: any) => {
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      }).subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventsUrl + 'userauthentications/save', JSON.stringify(this.currentUser), options)
      .map((response: Response) => { return <IUserModel>response.json(); })
      .catch(this.handleError);
  }

  logout() {
    let logoutInfo = { UserName: this.currentUser.userName, Password: '' };
    this.currentUser = undefined;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventsUrl + 'userauthentications/logout', JSON.stringify(logoutInfo), options);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
