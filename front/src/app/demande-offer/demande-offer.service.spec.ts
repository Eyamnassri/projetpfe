import { TestBed } from '@angular/core/testing';

import { DemandeOfferService } from './demande-offer.service';

describe('DemandeOfferService', () => {
  let service: DemandeOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
