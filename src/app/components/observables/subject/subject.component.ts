import { Component, OnInit } from '@angular/core';
import {  Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  // 1. SUBJECT
  subject$: Subject<any> = new Subject();                               // subscribers get notified (get value) only when value is emitted with .next()
  userSubject$: Subject<any> = new Subject();
  isLoading$: Subject<boolean> = new Subject();

  isDisabled = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {

    console.clear();

    // 1. SUBJECT
    this.callSubject();

    this.isLoading$.next(false);
  }

  callSubject() {
    this.subject$.subscribe(data => console.log("Subject data:", data));
    this.subject$.next(200);                                              // emit data to subscribers only when .next() is called  !!!
  }


  fetchUsers() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.userService.getAllUsers().subscribe({
        next: (users) => this.userSubject$.next(users),
        error: () => new Error("Error fetching userds...."),
        complete: () => {
          this.isDisabled = true;
          this.isLoading$.next(false);
        }
      })
    }, 1000)
  }

  clearUsers() {
    this.isDisabled = false;
    this.userSubject$.next(null);
    // location.reload();
  }
}
