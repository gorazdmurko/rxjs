import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, of } from 'rxjs';

export interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: UserInterface[] = [
    { id: '1', name: 'foo' },
    { id: '2', name: 'bar' },
    { id: '3', name: 'baz' }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  getUser(id: string): Observable<UserInterface> {
    const user = this.users.find((user) => user.id === id);
    return of(user!);
  }

  getUserDetails(user: UserInterface): Observable<UserInterface> {
    return of({ id: user.id, name: user.name });
  }

  execute() {
    const foo$ = this.getUser('1').pipe(
      concatMap((user) => this.getUserDetails(user))  // ConcatMap waits for previous Observable to be completed!
    )
    foo$.subscribe((foo) => console.log('foo', foo));
  }
}
