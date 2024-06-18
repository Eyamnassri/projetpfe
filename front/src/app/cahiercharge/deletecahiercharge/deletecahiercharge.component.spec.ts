import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecahierchargeComponent } from './deletecahiercharge.component';

describe('DeletecahierchargeComponent', () => {
  let component: DeletecahierchargeComponent;
  let fixture: ComponentFixture<DeletecahierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecahierchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecahierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
