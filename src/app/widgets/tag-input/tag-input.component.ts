import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayTagComponent } from '../overlay-tag/overlay-tag.component';
@Component({
  selector: 'tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  constructor(private overlay: Overlay) { }

  ngOnInit(): void {
    const overlayRef = this.overlay.create();
    const userProfilePortal = new ComponentPortal(OverlayTagComponent);
    overlayRef.attach(userProfilePortal);
  }
}
