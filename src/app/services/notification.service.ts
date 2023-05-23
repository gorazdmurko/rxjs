import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // -- 1 -- Subject
  // public notificationSubject = new Subject<string>();

  // -- 2 -- BehaviorSubject holds default value
  public notificationSubject = new BehaviorSubject<string>('Greeting from Nisha');

  constructor() { }

  sendNotification(data: string) {
    // Subject
    this.notificationSubject.next(data);
  }
}
