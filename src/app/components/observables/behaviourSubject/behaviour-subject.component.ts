import { Component, OnInit } from '@angular/core';
import {  BehaviorSubject, Subject } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  // 2. BEHAVIOUR SUBJECT
  behaviourSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(1);        // subscribers will always get something ('initial' or the 'last emitted' value)
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  users: any;
  isDisabled: boolean = false;
  subject$: Subject<any> = new Subject();


  constructor(private uiService: UiService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {

    console.clear();

    // 2. BEHAVIOUR SUBJECT
    this.callBehaviorSubject();
  }

  callBehaviorSubject() {
    this.behaviourSubject$.subscribe(data => console.log("BehaviourSubject 1 data:", data));  // since it has a default value it emits data to subscribers instantlly (does not wait for .next() call)
    // usefull when you need to maintain an initial state

    this.behaviourSubject$.next(120);
    this.behaviourSubject$.subscribe(data => console.log("BehaviourSubject 2 data:", data));
  }

  testSpinner() {
    // 1. set isLoading to true
    this.isLoading$.next(true);

    // 2. call service
    this.uiService.testSpinner().subscribe({
      next: (x) => console.log("NEXT", x),
      error: () => this.isLoading$.next(false),
      complete: () => {
        this.isLoading$.next(false);
        console.log("After response is back --> second call")

        // check also in CRASH COURSE

        this.userService.getAllUsers().subscribe({
          next: (users) => this.users = users,
          error: () => new Error("Error fetching users..."),
          complete: () => {
            console.log("Users:", this.users)
            this.subject$.next(this.users);
            this.isDisabled = true;
          }
        })
      }
    })
  }

  clearUsers() {
    this.users = null;
    this.isDisabled = false;
    this.subject$.next(this.users);
    // location.reload();
  }

}
