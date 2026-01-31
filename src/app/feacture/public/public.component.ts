import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/private/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from '../../layouts/public/header-public/header-public.component';

@Component({
  selector: 'app-public',
  imports: [RouterOutlet,HeaderPublicComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
