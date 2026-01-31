import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from '../../layouts/public/header-public/header-public.component';
import { HeaderComponent } from '../../layouts/private/header/header.component';

@Component({
  selector: 'app-private',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {

}
