import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLayoutService {
  private collapsed = new BehaviorSubject<boolean>(false);
  constructor() { }

  getCollapsedState(): Observable<boolean> {
    return this.collapsed.asObservable();
  }

  setCollapsedState(newState: boolean) {
    this.collapsed.next(newState);
  }
}
