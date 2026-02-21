import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User, UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'currentUser';
  private platformId = inject(PLATFORM_ID);

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(UserLoginRequest: UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];
    const user = users.find(u => u.email === UserLoginRequest.email && u.password === UserLoginRequest.password);

    if (user !== undefined) {
      let userLoginResponse: UserLoginResponse = {
        token: "fake-jwt-token",
        user: user
      };
      this.saveLocalStorage(userLoginResponse);
      return userLoginResponse;
    }
    return null;
  }

  saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
      localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
    }
  }

  getCurrentUser(): UserLoginResponse | null {
    if (!this.isBrowser) return null;

    const token = localStorage.getItem(this.TOKEN_KEY);
    const userJson = localStorage.getItem(this.USER_KEY);

    if (token && userJson) {
      const user: UserLoginResponse = {
        token: token,
        user: JSON.parse(userJson)
      };
      return user;
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser) return false;
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }
}