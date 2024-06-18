import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOfferComponent } from './demande-offer.component';

describe('DemandeOfferComponent', () => {
  let component: DemandeOfferComponent;
  let fixture: ComponentFixture<DemandeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
