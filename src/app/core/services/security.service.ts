import { Injectable } from '@angular/core';
import { User, UserLoginRequest, UserLoginResponse } from '../models/user.model';

import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'currentUser';

  constructor() { }
  login(UserLoginRequest:UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];
    const user=users.find(u=>u.email === UserLoginRequest.email && u.password === UserLoginRequest.password);

    if(user!==undefined){

      let userLoginResponse:UserLoginResponse = {
        token: "fake-jwt-token",
        user: user
      };
      this.saveLocalStorage(userLoginResponse);
      return userLoginResponse;
    }
    return null;
  }

  saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }
  getCurrentUser(): UserLoginResponse | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userJson = localStorage.getItem(this.USER_KEY);

    if (token && userJson) {
      const user : UserLoginResponse = {
        token: token,
        user: JSON.parse(userJson)
       };
      return user;
      }
    return null;
  
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
