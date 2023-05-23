import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

  private subscription1!: Subscription;
  private subscription2!: Subscription;

  constructor() {}

  /**************************
  *   PROMIS vs OBSERVABLE  *
  **************************/

 ngOnInit(){
  // -- 1 -- PROMISE (calls as soon as you define it) -- !! promises return 1 single value !!
  const promise = new Promise(resolve => {
    console.log("Promise call...");
    setTimeout(() => {
      resolve('Promise working 1');
      resolve('Promise working 2');
      resolve('Promise working 3');
    }, 1000)
  })
  promise.then(result => console.log(result));


  // -- 2-- OBSERVABLE (if nobody is here to listen, it will not make a call) -- can return multiple values
  const observable = new Observable(subscribe => {
    console.clear();
    console.log("observable call...");

    setTimeout(() => {
      subscribe.next('Observable working 1');
      subscribe.next('Observable working 2');
      subscribe.next('Observable working 3');
    }, 1000)
  })

  this.subscription1 = observable.pipe(filter(d => d === 'Observable working 1'))
  .subscribe(result => console.log(result));

  const observable2 = new Observable(subscribe => {
    console.log("observable call...");
    let counter = 0;
    setInterval(() => {
      counter++;
      subscribe.next(counter);
    }, 1000)
  })
  this.subscription2 = observable2.subscribe(d => console.log('Observable working', d));

 }

 ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
 }

}
