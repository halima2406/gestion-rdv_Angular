//Entite User cote backend

export interface User {
    id: number;
    email: string;
    password: string;
    role: UserRole;
    fullName?: string;
  }
  
  export type UserRole =
    | 'PATIENT'
    | 'MEDECIN'
    | 'SECRETAIRE'
    | 'ADMIN';
  
  export interface UserLoginRequest {
    email: string;
    password: string;
  }
  
  export interface UserLoginResponse {
    token?: string;
    user: User;
  }

