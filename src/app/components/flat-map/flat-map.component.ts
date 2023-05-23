import { Component, OnInit } from '@angular/core';
import { delay, filter, flatMap, from, interval, of, take } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrls: ['./flat-map.component.css']
})
export class FlatMapComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    // let postIds = of(1, 2, 3, 4, 5);
    let postIds = interval(5).pipe(
      filter(val => val > 0),
      take(100)
    )

    postIds.pipe(
      flatMap((id) => {
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
    example(flatMap)();
  }

  ngOnDestroy(): void {
    //
  }
}
