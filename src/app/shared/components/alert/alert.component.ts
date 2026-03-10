import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: `
    <div class="alert alert-info" role="alert">
      <strong>{{message}}</strong>
    </div>
  `,
  styles: []
})
export class AlertComponent { 
  @Input({required:true}) message: string = "Pas de Demandes disponibles";
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
}