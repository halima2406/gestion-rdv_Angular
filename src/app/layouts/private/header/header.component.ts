import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SecurityService } from '../../../core/services/security.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-private',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private securityService : SecurityService,
     private router: Router) { }

  logout():void{
    this.securityService.logout();
    this.router.navigate(['/public/login']);
  }

}
