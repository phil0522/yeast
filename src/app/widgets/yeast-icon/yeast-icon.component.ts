import { Component, OnInit, Input } from '@angular/core';

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
  @Input() hint: string;

  constructor() { }

  ngOnInit(): void {
  }

  getIconUrl(): string {

    return '/assets/icons/fold.svg';
  }

}
