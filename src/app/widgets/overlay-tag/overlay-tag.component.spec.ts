import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTagComponent } from './overlay-tag.component';

describe('OverlayTagComponent', () => {
  let component: OverlayTagComponent;
  let fixture: ComponentFixture<OverlayTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
