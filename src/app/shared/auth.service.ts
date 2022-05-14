import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: any;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      firstName: 'Wealth',
      lastName: 'Iduwe',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  logoutUser() {
    this.currentUser = null;
  }

  updateUser(firstName: string, lastName: string) {
    (this.currentUser.firstName = firstName),
      (this.currentUser.lastName = lastName);
  }
}
