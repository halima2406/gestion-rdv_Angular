import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/private/header/header.component';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'mon-projet';

  helloObservables?:Observable<string>

  constructor() {

    this.helloObservables = new Observable<string>(
      (subscriber: Subscriber<string>) => {
  
        const message = "Hello, Angular!";
  
        for (let i = 0; i < message.length; i++) {
  
          setTimeout(() => {
            subscriber.next(message[i]);
          }, 1000 * (i + 1));
        }
  
        setTimeout(() => {
          subscriber.complete();
        }, 1000 * (message.length + 1));
      }
    );
  
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }
  
}
