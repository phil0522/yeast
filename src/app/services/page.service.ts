import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPath: BehaviorSubject<string>;
  constructor(private router: Router) {
    this.currentPath = new BehaviorSubject<string>(router.url);
    router.events.subscribe(event => {
      /**
       * It only fires the following events.
       * location is changed to ActivationEnd(path: '**')
       * page.service.ts:12 location is changed to ChildActivationEnd(path: '')
       * page.service.ts:12 location is changed to Scroll(anchor: 'null', position: 'null')
       * page.service.ts:12 location is changed to NavigationEnd(id: 19, url: '/home/dashboard', urlAfterRedirects: '/home/dashboard')
       */
      if (event instanceof NavigationEnd) {
        console.log(`location is changed to ${event}`);
        this.currentPath.next(event.url);
      }
    });
  }

  getCurrentPath() {
    return this.currentPath;
  }
}
