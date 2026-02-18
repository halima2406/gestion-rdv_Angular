import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/private/header/header.component';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'mon-projet';
  letter: string = '';
  letter1: string = '';
  letter2: string = '';

  susbcription1?: Subscription; 
  susbcription2?: Subscription; 
  susbcription3?: Subscription; 

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

    const helloObserver1 = {
      next: (letter: string) => {
        this.letter = letter;
      },
      complete: () => {
        console.log("Observer 1 a reçu toutes les données");
      }
    };
  
    const helloObserver2 = {
      next: (letter: string) => {
        this.letter1 = letter;
      },
      complete: () => {
        console.log("Observer 2 a reçu toutes les données");
      }
    };
  
    this.susbcription1 = this.helloObservables!.subscribe(helloObserver1);
    this.susbcription2 = this.helloObservables!.subscribe(helloObserver2);
    this.susbcription3 = this.helloObservables!.subscribe({
      next: (letter: string) => {
        this.letter2 = letter;
      },
      complete: () => {
        console.log("Observer 3 a reçu toutes les données");
      }
    });
  }

  ngOnDestroy(): void {
    this.susbcription1?.unsubscribe();
    this.susbcription2?.unsubscribe();
    this.susbcription3?.unsubscribe();
    console.log("Tous les abonnements ont été désabonnés");
   
  }
  
}
