import { TestBed } from '@angular/core/testing';

import { GlobalLayoutService } from './global-layout.service';

describe('GlobalLayoutService', () => {
  let service: GlobalLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
