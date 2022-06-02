import { TestBed } from '@angular/core/testing';

import { GoToTopService } from './go-to-top.service';

describe('GoToTopService', () => {
  let service: GoToTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoToTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
