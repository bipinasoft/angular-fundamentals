import { Injectable } from '@angular/core';
import { IUserModel } from '../models/IUserModel';
import { Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthenticationService {
  currentUser: IUserModel;
  eventsUrl: String = 'http://localhost:50830/api/';

  constructor(private http: Http) { }

  authenticateUser(userName: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const loginInfo = { UserName: userName, Password: password };

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

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventsUrl + 'userauthentications/save', JSON.stringify(this.currentUser), options)
      .map((response: Response) => {
        return <IUserModel>response.json();
      })
      .catch(this.handleError);
  }

  logout() {
    const logoutInfo = { UserName: this.currentUser.userName, Password: '' };
    this.currentUser = undefined;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.eventsUrl + 'userauthentications/logout', JSON.stringify(logoutInfo), options);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
