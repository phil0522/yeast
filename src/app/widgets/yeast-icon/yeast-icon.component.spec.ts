import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeastIconComponent } from './yeast-icon.component';

describe('YeastIconComponent', () => {
  let component: YeastIconComponent;
  let fixture: ComponentFixture<YeastIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeastIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeastIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
