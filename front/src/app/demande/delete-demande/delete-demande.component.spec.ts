import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDemandeComponent } from './delete-demande.component';

describe('DeleteDemandeComponent', () => {
  let component: DeleteDemandeComponent;
  let fixture: ComponentFixture<DeleteDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
