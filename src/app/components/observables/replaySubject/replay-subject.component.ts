import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html'
})
export class ReplaySubjectComponent implements OnInit {

  // 4. REPLAY SUBJECT
  $message: ReplaySubject<any> = new ReplaySubject(2);                            // buffer holds only last 2 emitted values (no arguments means to buffer all the values)

  constructor() { }

  ngOnInit(): void {

    console.clear();

    // 4. REPLAY SUBJECT
    this.callReplaySubject();
  }

  callReplaySubject() {
    this.$message.next("Hello...");
    this.$message.next("How are you?");
    this.$message.next("From where are you?");
    this.$message.next("Stay at home.");
    this.$message.subscribe(msg => console.log("ReplaySubject User 1:", msg));    // default behaviour of ReplaySubject -- to hold old values

    this.$message.next("Don't get vaccinated.");
    this.$message.next("Keep learning.");
    this.$message.subscribe(msg => console.log("ReplaySubject User 2:", msg));
  }

}
