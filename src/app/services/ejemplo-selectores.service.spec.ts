import { TestBed } from '@angular/core/testing';

import { EjemploSelectoresService } from './ejemplo-selectores.service';

describe('EjemploSelectoresService', () => {
  let service: EjemploSelectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemploSelectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
