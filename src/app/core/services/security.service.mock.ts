import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User, UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';
import { ISecurityService } from './interfaces/security.interface.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityMockService implements ISecurityService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'currentUser';
  private platformId = inject(PLATFORM_ID);

  private currentUserSubject=new BehaviorSubject<UserLoginResponse | null>(null);
  currentUser$=this.currentUserSubject.asObservable();

  private isAuthenticatedSubject=new BehaviorSubject<boolean>(false);
 
  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  constructor() { }

  login(UserLoginRequest: UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];
    const user = users.find(u => u.email === UserLoginRequest.email && u.password === UserLoginRequest.password);

    if (user !== undefined) {
      let userLoginResponse: UserLoginResponse = {
        token: "fake-jwt-token",
        user: user
      };
      this.saveLocalStorage(userLoginResponse);

      this.currentUserSubject.next(userLoginResponse);
      this.isAuthenticatedSubject.next(true);
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
    return this.currentUserSubject.getValue();
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }
}