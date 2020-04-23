import { Component, OnInit } from '@angular/core';
import { GlobalLayoutService } from 'src/app/services/global-layout.service';
import { PageService } from 'src/app/services/page.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

class Breadcrumb {
  constructor(readonly name: string, readonly url: string) { }
}

@Component({
  selector: 'basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {

  constructor(private layoutService: GlobalLayoutService,
    private pageService: PageService) { }

  public collapsed = false;

  private pageSubscription: Subscription;
  breadcrumbs: Observable<Breadcrumb[]>;
  ngOnInit(): void {
    this.pageSubscription = this.layoutService.getCollapsedState().subscribe(
      v => {
        console.log(`update collapse state to ${v}`);
        this.collapsed = v;
      }
    );

    this.breadcrumbs = this.getBreadcrumbs();
  }

  onCollapseClick(): void {
    this.layoutService.setCollapsedState(!this.collapsed);
  }

  private getBreadcrumbs(): Observable<Breadcrumb[]> {
    return map((s: string) => {
      console.log(s);
      let items = s.substr(1).split("/");
      let r: Breadcrumb[] = [];
      let url = "";
      for (let item of items) {
        url = url + "/" + item;
        r.push(new Breadcrumb(item, url));
      }
      console.log(r);
      return r;
    })(this.pageService.getCurrentPath());
  }

  ngOnDestroy(): void {
    this.pageSubscription.unsubscribe();
  }

}
