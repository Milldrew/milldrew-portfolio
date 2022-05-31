import { TestBed } from '@angular/core/testing';

import { ScrollToHeaderService } from './scroll-to-header.service';

describe('ScrollToHeaderService', () => {
  let service: ScrollToHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollToHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
