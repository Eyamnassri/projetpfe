import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOfferDeleteComponent } from './demande-offer-delete.component';

describe('DemandeOfferDeleteComponent', () => {
  let component: DemandeOfferDeleteComponent;
  let fixture: ComponentFixture<DemandeOfferDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOfferDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOfferDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
