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

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
