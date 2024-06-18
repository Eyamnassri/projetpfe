import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiementDemanndeComponent } from './traiement-demannde.component';

describe('TraiementDemanndeComponent', () => {
  let component: TraiementDemanndeComponent;
  let fixture: ComponentFixture<TraiementDemanndeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiementDemanndeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraiementDemanndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
