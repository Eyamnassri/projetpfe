import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcahierchargeComponent } from './detailcahiercharge.component';

describe('DetailcahierchargeComponent', () => {
  let component: DetailcahierchargeComponent;
  let fixture: ComponentFixture<DetailcahierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcahierchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcahierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
