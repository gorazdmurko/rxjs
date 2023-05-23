import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  // OBSERVABLE
  //    -- can return multiple values
  //    -- if nobody is here to listen, it will not make a call

  observable$: Observable<any> = new Observable;
  subscription: Subscription = new Subscription;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    console.clear();
    this.observable$ = this.countryService.fetchCountries();
    // this.subscription = this.countryService.fetchCountries().subscribe(c => console.log("COUNTRY:", c));
    this.countryService.fetchCountries().subscribe({
      next: c => console.log("COUNTRY:", c),
      error: e => console.log("Error:", e),
      complete: () => console.log("Complete")
    }).unsubscribe()

    this.countryService.testCountry().subscribe({
      next: (x) => console.log("Test Next:", x),
      complete: () => {
        console.log("Test Complete")
      }
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
