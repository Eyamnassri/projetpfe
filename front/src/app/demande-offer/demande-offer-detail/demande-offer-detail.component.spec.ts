import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOfferDetailComponent } from './demande-offer-detail.component';

describe('DemandeOfferDetailComponent', () => {
  let component: DemandeOfferDetailComponent;
  let fixture: ComponentFixture<DemandeOfferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOfferDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
