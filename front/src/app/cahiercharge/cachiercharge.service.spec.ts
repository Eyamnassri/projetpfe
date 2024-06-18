import { TestBed } from '@angular/core/testing';

import { CachierchargeService } from './cachiercharge.service';

describe('CachierchargeService', () => {
  let service: CachierchargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachierchargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
