import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcahierchargeComponent } from './addcahiercharge.component';

describe('AddcahierchargeComponent', () => {
  let component: AddcahierchargeComponent;
  let fixture: ComponentFixture<AddcahierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcahierchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcahierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
