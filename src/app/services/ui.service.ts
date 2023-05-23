import { Inject } from "@angular/core";
import {Observable, of } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

@Inject({
  providedIn: 'root'
})
export class UiService {

  constructor() {}

  // DELAY RESPONSE -- SPINNER TEST in footer
  testSpinner(): Observable<any> {
    let fakeResponse = [1,2,3];
    let delayedObservable = of(fakeResponse).pipe(delay(2000));

    return delayedObservable;
  }
}
