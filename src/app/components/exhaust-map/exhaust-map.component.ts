import { Component, OnInit, OnDestroy } from '@angular/core';
import { exhaustMap, filter, interval, from, of, take, delay } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // let postIds = of(1, 2, 3, 4, 5);
    let postIds = interval(5).pipe(
      filter(val => val > 0),
      take(100)
    )

    postIds.pipe(
      exhaustMap((id) => {
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
    example(exhaustMap)();
  }

  ngOnDestroy(): void {
    //
  }
}


// exhaustMap --> calls are being executed one after another
//            --> it will return the first one, then maybe the 26th one when first is completed, then maybe 47th one when 26th is completed, then ...
