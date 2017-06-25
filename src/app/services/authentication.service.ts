import { Injectable } from '@angular/core';
import { IUserModel } from '../models/IUserModel';

@Injectable()
export class AuthenticationService {
  currentUser: IUserModel;

  constructor() { }

  authenticateUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'admin',
      firstName: 'John',
      lastName: 'Doe'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
