import { Component, OnInit, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() title: string

  constructor() { }

  ngOnInit(): void {
  }
}
