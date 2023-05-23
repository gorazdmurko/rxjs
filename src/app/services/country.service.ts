import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  fetchCountries() : Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/name/slovenia?fullText=true');
  }

  testCountry(): Observable<any> {
    const test = new Observable<any>(obs => {
      obs.next({ name: "bla-bla-1" })
      obs.next({ name: "bla-bla-2" })
      obs.next({ name: "bla-bla-3" })
      obs.next({ name: "bla-bla-4" })
      obs.complete();
    })
    return test;
  }
}
