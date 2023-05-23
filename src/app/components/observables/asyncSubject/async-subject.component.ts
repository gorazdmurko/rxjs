import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
})
export class AsyncSubjectComponent implements OnInit {

  // 3. ASYNC SUBJECT
  asyncSubject$: AsyncSubject<any> = new AsyncSubject();

  constructor() { }

  ngOnInit(): void {

    console.clear();

    // 3. ASYNC SUBJECT
    this.callAsyncSubject();
  }

  callAsyncSubject() {
    this.asyncSubject$.next("AsyncSubject Value1");
    this.asyncSubject$.next("AsyncSubject Value2");
    this.asyncSubject$.next("AsyncSubject Value3");

    this.asyncSubject$.complete();
    this.asyncSubject$.next("AsyncSubject Value4");
    this.asyncSubject$.next("AsyncSubject Value5");

    // it only works on complete method (or it will never emit value) -- as soon as you call complete method, the last value will automatically be eemited to all subscribers
    this.asyncSubject$.subscribe(d => console.log(`AsyncSubject data 1 ${d}`));

    this.asyncSubject$.complete();
    this.asyncSubject$.next("AsyncSubject Value6");
    this.asyncSubject$.next("AsyncSubject Value7");

    this.asyncSubject$.complete();

    this.asyncSubject$.subscribe(d => console.log(`AsyncSubject data 2 ${d}`));


    const cache: any = {};
    const url = "https://restcountries.com/v3.1/name/slovenia?fullText=true";

    // !!! cashing
    function getCountryInfo(url: string) {
      if (!cache[url]) {
        // api call using fetch method
        cache[url] = new AsyncSubject();
        fetch(url).then(res => res.json()).then(data => {
          cache[url].next(data);
          cache[url].complete();
        });
      }
      return cache[url].asObservable();
    }

    console.log("Cache:", cache);

    getCountryInfo(url).subscribe((data: any) => console.log(`Slovenia info:`, data));

    setTimeout(() => {
      getCountryInfo(url).subscribe((data: any) => console.log(`Slovenia info after 3 seconds:`, data));
    }, 3000)
  }

}
