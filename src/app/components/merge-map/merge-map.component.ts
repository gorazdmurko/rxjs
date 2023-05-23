import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay, filter, from, interval, mergeMap, of, take } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit, OnDestroy {

  // import HttpClientModule in AppModule
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // let postIds = of(1, 2, 3, 4, 5);
    let postIds = interval(1).pipe(
      filter(val => val > 0),
      take(5)
    )

    postIds.pipe(
      mergeMap((id) => {
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
    example(mergeMap)();
  }

  ngOnDestroy(): void {
      //
  }
}


// mergeMap --> whoever completes first get also first emitted (if 4 completes before 2 it comes first as a return value)
