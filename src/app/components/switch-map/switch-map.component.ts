import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, interval, from, of, switchMap, take, delay } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // let postIds = of(1, 2, 3, 4, 5);
    let postIds = interval(100).pipe(
      filter(val => val > 0),
      take(10)
    )

    postIds.pipe(
      switchMap((id) => {
        return this.httpService.getResponse(id);
      })
    ).subscribe(postDetails => {
      console.log("Details:", postDetails);
    })
  }

  execute() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4, 5])
      .pipe(operator((x: any) => of(x).pipe(delay(500))))
      .subscribe(
        console.log,
        () => {},
        () => console.log(`${operator.name} completed`)
      );
    }
    example(switchMap)();
  }

  ngOnDestroy(): void {
    //
  }
}


// switchMap --> it breaks every call which is not completed before next call is made
//           --> last one will be executed successfully because there is no reason to switch to next one (no next Observable comming)
//           --> it will immediately switch to the next one while not completing the previous one (if call is happening so fast it does not complete previous one while already switching)
//           --> where to use: in auto-complete
