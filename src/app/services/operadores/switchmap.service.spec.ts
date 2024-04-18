import { TestBed } from '@angular/core/testing';

import { SwitchmapService } from './switchmap.service';

describe('SwitchmapService', () => {
  let service: SwitchmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
