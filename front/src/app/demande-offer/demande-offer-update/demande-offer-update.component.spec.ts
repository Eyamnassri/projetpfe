import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOfferUpdateComponent } from './demande-offer-update.component';

describe('DemandeOfferUpdateComponent', () => {
  let component: DemandeOfferUpdateComponent;
  let fixture: ComponentFixture<DemandeOfferUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOfferUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOfferUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
