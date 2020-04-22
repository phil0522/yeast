import { Component, OnInit } from '@angular/core';
import { GlobalLayoutService } from 'src/app/services/global-layout.service';

@Component({
  selector: 'basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {

  constructor(private layoutService: GlobalLayoutService) { }

  private collapsed = false;

  ngOnInit(): void {
    this.layoutService.getCollapsedState().subscribe(
      v => {
        console.log("update collapse state to ", v);
        this.collapsed = v;
      }
    )
  }

  onCollapseClick(): void {
    this.layoutService.setCollapsedState(!this.collapsed);
  }

}
