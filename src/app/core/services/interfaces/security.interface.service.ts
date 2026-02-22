import { UserLoginRequest } from "../../models/user.model";
import { UserLoginResponse } from "../../models/user.model";
import { InjectionToken } from "@angular/core";

export interface ISecurityService {
    login(UserLoginRequest: UserLoginRequest): UserLoginResponse | null
    logout(): void
    getCurrentUser(): UserLoginResponse | null
}  

export const SECURITY_SERVICE_TOKEN = new InjectionToken<ISecurityService>('ISecurityService');