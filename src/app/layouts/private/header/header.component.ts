import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Router } from '@angular/router';
import { SECURITY_SERVICE_TOKEN } from '../../../core/services/interfaces/security.interface.service';
import { ISecurityService } from '../../../core/services/interfaces/security.interface.service';
import { UserLoginResponse } from '../../../core/models/user.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header-private',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public currentUser!:UserLoginResponse ;
  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService : ISecurityService,
     private router: Router) { }

  logout():void{
    this.securityService.logout();
    this.router.navigate(['/public/login']);
  }

  ngOnInit(): void {
    this.currentUser = this.securityService.getCurrentUser()!;
  }

}
