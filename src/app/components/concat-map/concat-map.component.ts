import { Component, OnInit, OnDestroy } from '@angular/core';
import { concatMap, filter, from, interval, of, take, delay } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // let postIds = of(1, 2, 3, 4, 5);
    let postIds = interval(1).pipe(
      filter(val => val > 0),
      take(5)
    )

    postIds.pipe(
      concatMap((id) => {
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
    example(concatMap)();
  }

  ngOnDestroy(): void {
    //
  }
}


// concatMap --> will be executed one after another (only when first is completed it goes to next, ...)
