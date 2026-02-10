import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';

export const isConnectGuard: CanActivateFn = (route, state) => {

  let securityService = inject(SecurityService);
  let router = inject(Router);  

  if (!securityService.isAuthenticated()){
    router.navigate(['/public/login']);
    return false;
  };
  return true;
  
  

};
