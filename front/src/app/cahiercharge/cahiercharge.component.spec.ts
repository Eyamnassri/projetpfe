import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargeComponent } from './cahiercharge.component';

describe('CahierchargeComponent', () => {
  let component: CahierchargeComponent;
  let fixture: ComponentFixture<CahierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CahierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
