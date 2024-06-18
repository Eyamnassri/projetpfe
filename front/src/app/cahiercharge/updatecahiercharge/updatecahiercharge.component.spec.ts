import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecahierchargeComponent } from './updatecahiercharge.component';

describe('UpdatecahierchargeComponent', () => {
  let component: UpdatecahierchargeComponent;
  let fixture: ComponentFixture<UpdatecahierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecahierchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecahierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
