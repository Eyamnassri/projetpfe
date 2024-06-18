import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommissionsComponent } from './addcommissions.component';

describe('AddcommissionsComponent', () => {
  let component: AddcommissionsComponent;
  let fixture: ComponentFixture<AddcommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
