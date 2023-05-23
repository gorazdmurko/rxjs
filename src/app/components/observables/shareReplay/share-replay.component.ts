import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { shareReplay } from "rxjs";

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

    console.clear();

      const obs$ = this.httpClient.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).pipe(shareReplay());

      // shareReplay share calls to the APIs

      obs$.subscribe((d) => {
        console.log(d);
      })

      obs$.subscribe((d) => {
        console.log(d);
      })

      obs$.subscribe((d) => {
        console.log(d);
      })

      obs$.subscribe((d) => {
        console.log(d);
      })

      // 1 call is being made (check network), but it is shared to 4 subscribers (check console logs)
  }

}
