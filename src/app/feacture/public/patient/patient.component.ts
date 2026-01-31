import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from '../../../layouts/public/header-public/header-public.component';

@Component({
  selector: 'app-patient',
  imports: [RouterOutlet,HeaderPublicComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

}
