import { TestBed } from '@angular/core/testing';

import { BasicComponentStoreService } from './basic-component-store.service';

describe('BasicComponentStoreService', () => {
  let service: BasicComponentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicComponentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
