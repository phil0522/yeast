import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yeast-icon',
  templateUrl: './yeast-icon.component.html',
  styles: [
    `
      :host {
        width: 40px;
        height: 40px;
      }

      img {
        width: 40px;
        height: 40px;
      }
    `
  ]
})
export class YeastIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getIconUrl(): string {
    return "/assets/icons/menu-unfold.svg";
  }

}
