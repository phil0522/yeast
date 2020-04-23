import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  path: Observable<string>;

  constructor(private pageService: PageService) {
    this.path = pageService.getCurrentPath();

    this.path.subscribe(v => {
      console.log("get ", v);
    })
  }


  ngOnInit(): void {
  }

}
