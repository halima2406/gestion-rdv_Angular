import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/private/header/header.component';
import { concatMap, delay, Observable, Subscriber, Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { AsyncPipe } from '@angular/common';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mon-projet';

  helloObservables?:Observable<string>

  constructor() {
  }

  ngOnInit(): void {
      
  }

  
  
}
