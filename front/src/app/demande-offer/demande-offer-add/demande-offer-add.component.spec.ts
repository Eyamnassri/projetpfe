import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOfferAddComponent } from './demande-offer-add.component';

describe('DemandeOfferAddComponent', () => {
  let component: DemandeOfferAddComponent;
  let fixture: ComponentFixture<DemandeOfferAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOfferAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
