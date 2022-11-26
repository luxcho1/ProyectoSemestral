import { TestBed } from '@angular/core/testing';

import { MindicadorclService } from './mindicadorcl.service';

describe('MindicadorclService', () => {
  let service: MindicadorclService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindicadorclService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
